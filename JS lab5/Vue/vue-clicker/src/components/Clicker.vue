<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['button-clicked'])

const count = ref(0)

const increment = () => {
  count.value += props.amount
  emits('button-clicked') 
}
</script>

<template>
  <div class="clicker">
    <slot :click="increment" :count="count">
      <button @click="increment">Кликер ({{ count }})</button>
    </slot>
  </div>
</template>

<style scoped>
.clicker {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
