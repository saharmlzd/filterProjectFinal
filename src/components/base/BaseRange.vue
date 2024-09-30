<template>
  <div class="base-range">
    <label :for="element.name" class="base-range__label">{{ element.label }}</label>
    <input type="range" :name="element.name" v-model="rangeValue" class="base-range__input" />
    <span class="base-range__value">{{ rangeValue }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { InputElement } from '@/types'

const props = defineProps<{
  modelValue?: number
  element: InputElement
}>()
const emit = defineEmits(['update:modelValue'])

const rangeValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped>
.base-range {
  margin-bottom: 1rem;
  direction: rtl;
}

.base-range__label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.base-range__input {
  width: 30%;
  margin-bottom: 0.5rem;
}

.base-range__value {
  align-self: flex-end;
  font-size: 0.9rem;
  color: #666;
}
</style>
