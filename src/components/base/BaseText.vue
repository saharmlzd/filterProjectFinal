<template>
  <div class="base-input">
    <label class="base-input__label" :for="element.name">{{ element.label }}</label>
    <input class="base-input__input" type="text" :name="element.name" v-model="inputValue" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { InputElement } from '@/types'

const props = defineProps<{
  modelValue?: string
  element: InputElement
}>()
const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<style scoped>
.base-input {
  margin-bottom: 1rem;
  direction: rtl;
}

.base-input__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.base-input__input {
  width: 20%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.base-input__input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>
