import { model } from "mongoose";
import { SubmissionSchema } from "./schema";
import { ISubmissionDocument } from "./types";

export const SubmissionModel = model<ISubmissionDocument>(
  "submission",
  SubmissionSchema,
  "submissions"
);
