<script setup>
import Clicker from './components/Clicker.vue'
const handleClick = (n) => {
  alert(`Clicker ${n} clicked!`)
}
</script>

<template>
  <div>
    <Clicker v-for="n in 100" :key="n" :amount="2" @button-clicked="() => handleClick(n)">
      <template v-slot="{ count, click }">
        <button @click="click">Кастомная кнопка ({{ count }})</button>
      </template>
    </Clicker>
  </div>
</template>
