<template>
  <Teleport to="body">
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup-content">
        <button @click="close">Close</button>
        <slot :close="close"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, defineProps, watchEffect } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  close: Function,
  open: Function
});

const isVisible = ref(false);

watchEffect(() => {
  isVisible.value = props.isOpen;
});
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  width: 100%; 
  max-width: 400px;
  margin: auto; 
  padding: 20px;
  background: #333; 
  color: #eee; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08); 
}

button {
  background: #555; 
  color: #fff; 
  border: none;
  padding: 6px 12px;
  margin-top: 10px;
  margin-right: 10px; 
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: #777; 
}

button:first-child {
  float: right; 
}
</style>
