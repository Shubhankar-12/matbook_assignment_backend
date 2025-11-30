import { Schema, model } from "mongoose";

const ValidationRulesSchema = new Schema(
  {
    minLength: Number,
    maxLength: Number,
    min: Number,
    max: Number,
    minDate: String,
    maxDate: String,
    pattern: String,
    minSelected: Number,
    maxSelected: Number,
  },
  { _id: false }
);

const FormFieldSchema = new Schema(
  {
    name: { type: String, required: true },
    label: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "text",
        "number",
        "select",
        "multi-select",
        "date",
        "textarea",
        "switch",
      ],
      required: true,
    },
    placeholder: String,
    required: { type: Boolean, default: false },
    options: [String],
    validations: { type: ValidationRulesSchema, default: {} },
  },
  { _id: false }
);

export const FormSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    fields: { type: [FormFieldSchema], required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
