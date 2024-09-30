<template>
  <div class="checkbox-container">
    <label :for="element.name">{{ element.label }}</label>
    <input type="checkbox" :name="element.name" v-model="checked" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { InputElement } from '@/types'

const props = defineProps<{
  modelValue?: boolean
  element: InputElement
}>()
const emit = defineEmits(['update:modelValue'])

const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<style scoped>
.checkbox-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-container label {
  margin-right: 10px;
  font-weight: bold;
}

.checkbox-container input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
