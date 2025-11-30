// submission.types.ts
import { Document } from "mongoose";

export interface ISubmission {
  submission_id: string;
  values: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}

export interface ISubmissionDocument extends ISubmission, Document {}
