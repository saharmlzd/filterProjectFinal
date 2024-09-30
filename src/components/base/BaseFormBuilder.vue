<template>
    <form @submit.prevent="">
        <template v-for="element in elements" :key="element.name">
            <component v-if="shouldRenderElement(element)" :modelValue="modelValue[element.name]" :element="element"
                :is="getComponent(element.type)"
                @update:modelValue="(value: any) => updateValue(element.name, value)" />

        </template>
    </form>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { InputElement } from '@/types';
import { InputTypeEnum } from '@/types';
import BaseText from './BaseText.vue';
import BaseDropDown from './BaseDropDown.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import BaseCheckboxGroup from './BaseCheckboxGroup.vue';
import BaseRange from './BaseRange.vue';

const props = defineProps<{
    elements: InputElement[];
    modelValue: { [key: string]: any };
}>();
const emit = defineEmits(['update:modelValue']);

const shouldRenderElement = (element: InputElement) => {
    if (!element.parent) return true;
    const parentValue = props.modelValue[element.parent];
    
    if (Array.isArray(parentValue)) {
        return parentValue.includes(element.name);
    }

    if (element.type === InputTypeEnum.Range) {
        return !!parentValue;
    }
    
    return parentValue && (element.name === parentValue || parentValue === true);
};

const getComponent = (type: string) => {
    switch (type) {
        case 'text': return BaseText;
        case 'dropdown': return BaseDropDown;
        case 'checkbox': return BaseCheckbox;
        case 'checkbox-group': return BaseCheckboxGroup;
        case 'range': return BaseRange;
        default: return null;
    }
};

const updateValue = (name: string, value: any) => {
    emit('update:modelValue', { ...props.modelValue, [name]: value })
};

</script>