<template>
  <FormBuilder :elements="formElements" v-model="formData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormBuilder from '@/components/base/BaseFormBuilder.vue';
import { MockData } from '@/mocks';
import { useUrlSync } from '@/composables';
import type { InputElement } from '@/types';

const formElements = ref<InputElement[]>(MockData);
const { formData, clearField } = useUrlSync(formElements.value);

</script>