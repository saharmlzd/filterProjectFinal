import type { Nullable } from "./nullable";

export type InputOption = { 
    value: string | number,
    title: string | number,
}

export enum InputTypeEnum {
    Text = "text",
    Dropdown = "dropdown",
    Checkbox = "checkbox",
    CheckboxGroup = "checkbox-group",
    Range = "range"
};

export type InputElement = {
    type: InputTypeEnum,
    name: string,
    label: string,
    children?: Nullable<string[]>,
    parent?: Nullable<string>,
    options: Nullable<InputOption[]>,
}
