<template>
  <div class="dropdown-container">
    <label :for="element.name">{{ element.label }}</label>
    <select :name="element.name" v-model="selectedValue">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { InputElement } from '@/types'

const props = defineProps<{
  modelValue?: string | number
  element: InputElement
}>()
const emit = defineEmits(['update:modelValue'])

const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const options = props.element.options || []
</script>
<style scoped>
.dropdown-container {
  margin-bottom: 1rem;
  direction: rtl;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

select {
  width: 30%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

option {
  padding: 0.5rem;
}
</style>
