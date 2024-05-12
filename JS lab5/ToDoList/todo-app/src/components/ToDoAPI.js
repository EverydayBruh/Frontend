
export const addTaskToAPI = async (task) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: task.title, 
      userId: 1,
      completed: task.completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const toggleTaskStatusInAPI = async (task) => {
  const response = await fetch(`https://jsonplaceholder.typicde.com/todos/${task.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: task.title, 
      userId: task.userId, 
      completed: !task.completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const deleteTaskFromAPI = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};
