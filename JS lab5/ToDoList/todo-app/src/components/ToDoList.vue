

<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.completed" @click="toggleTask(task.id)" />
        <span :class="{ 'completed-task': task.completed }">{{ task.title }}</span>
        <button @click="confirmDelete(task.id)">Delete</button>
      </li>
    </ul>
    <Popup :isOpen="isPopupVisible" :close="closePopup" :open="openPopup" ref="popup">
      <template #default="{ close }">
        <p>Are you sure you want to delete this task?</p>
        <button @click="deleteTaskAndClose(currentTaskId, close)">Yes</button>
        <button @click="close">No</button>
      </template>
    </Popup>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { addTaskToAPI, toggleTaskStatusInAPI, deleteTaskFromAPI } from './ToDoAPI'
import Popup from './Popup.vue'

const tasks = ref([]);
const newTask = ref('');
const popup = ref(null);
const generateId = () => Date.now();



onMounted(() => {
  if (localStorage.getItem('tasks')) {
    tasks.value = JSON.parse(localStorage.getItem('tasks'));
  }
});

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });


const addTask = async () => { //fake api даёт всем таскам id 201, вместо этого генерируем id локально
  if (newTask.value.trim()) {
    const task = { id: generateId(), title: newTask.value, completed: false }; 
    tasks.value.push(task); 
    newTask.value = '';
    await addTaskToAPI(task);
  }
};


const toggleTask = async (id) => {
  const index = tasks.value.findIndex(task => task.id === id);
  if (index !== -1) {
    const updatedTask = await toggleTaskStatusInAPI(tasks.value[index]);
    tasks.value[index] = { ...tasks.value[index], completed: updatedTask.completed };
  }
};


const isPopupVisible = ref(false);
const currentTaskId = ref(null);

const openPopup = () => isPopupVisible.value = true;
const closePopup = () => isPopupVisible.value = false;

const confirmDelete = (id) => {
  currentTaskId.value = id;
  openPopup();
};

const deleteTaskAndClose = async (id, close) => {
  if (await deleteTaskFromAPI(id)) {
    tasks.value = tasks.value.filter(task => task.id !== id);
    close();
  }
};

</script>


<style scoped>
div {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #333;
  color: #eee;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  background: #555;
  color: #fff;
  border: none;
  padding: 6px 12px;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
}

button:hover {
  background: #777;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  align-items: center;
  display: flex;
}

input:focus, button:focus {
  outline: none;
}

input:checked + span {
  text-decoration: line-through;
  opacity: 0.6;
}
.completed-task {
  color: #aaa;
  text-decoration: line-through;
}
</style>

