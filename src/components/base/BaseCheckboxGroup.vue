<template>
  <div class="checkbox-group-input">
    <label>{{ element.label }}</label>
    <div class="checkbox-option" v-for="option in element.options" :key="option.value">
      <input
        type="checkbox"
        :value="option.value"
        :checked="isChecked(option.value)"
        @change="toggleCheckbox(option.value)"
      />
      <span>{{ option.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { InputElement } from '@/types'

const props = withDefaults(
  defineProps<{
    modelValue: string[]
    element: InputElement
  }>(),
  {
    modelValue: () => []
  }
)

const emit = defineEmits(['update:modelValue'])

const isChecked = (value: string) => {
  return props.modelValue.includes(value)
}

const toggleCheckbox = (value: string) => {
  const newValue = [...props.modelValue]

  if (newValue.includes(value)) {
    const index = newValue.indexOf(value)
    newValue.splice(index, 1)
  } else {
    newValue.push(value)
  }

  emit('update:modelValue', newValue)
}
</script>
<style scoped>
.checkbox-group-input {
  margin-bottom: 1rem;
  direction: rtl;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] {
  margin-right: 0.5rem;
}

span {
  font-size: 0.9rem;
}
</style>
