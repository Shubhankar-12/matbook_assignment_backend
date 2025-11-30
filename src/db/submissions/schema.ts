import { Schema, model } from "mongoose";

export const SubmissionSchema = new Schema(
  {
    values: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
