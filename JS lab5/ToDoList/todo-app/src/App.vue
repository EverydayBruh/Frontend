<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script setup>
import ToDoList from './components/ToDoList.vue'
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #eee;
  background-color: #222;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>