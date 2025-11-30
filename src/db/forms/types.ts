// form.types.ts
import { Document } from "mongoose";

export type FieldType =
  | "text"
  | "number"
  | "select"
  | "multi-select"
  | "date"
  | "textarea"
  | "switch";

export interface IValidationRules {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  minDate?: string;
  maxDate?: string;
  pattern?: string;
  minSelected?: number;
  maxSelected?: number;
}

export interface IFormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  validations?: IValidationRules;
}

export interface IForm {
  title: string;
  description: string;
  fields: IFormField[];
  created_at: Date;
  updated_at: Date;
}

export interface IFormDocument extends IForm, Document {}

export interface IJobDocument extends Document {
  [key: string]: any;
}
