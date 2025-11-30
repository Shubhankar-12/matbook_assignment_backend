import { model } from "mongoose";
import { FormSchema } from "./schema";
import { IFormDocument } from "./types";

export const FormModel = model<IFormDocument>("form", FormSchema, "forms");
export const JobModel = FormModel;
