import express from "express";
import { createSubmissionController } from "../use_cases/submissions/create";
import { getSubmissionsController } from "../use_cases/submissions/get_all";
import { getSubmissionByIdController } from "../use_cases/submissions/get_by_id";
import { deleteSubmissionController } from "../use_cases/submissions/delete";
import { updateSubmissionController } from "../use_cases/submissions/update";

export const submissionRouter = express.Router();

submissionRouter.post("/", createSubmissionController.execute());
submissionRouter.get("/", getSubmissionsController.execute());
submissionRouter.get("/:id", getSubmissionByIdController.execute());
submissionRouter.delete("/:id", deleteSubmissionController.execute());
submissionRouter.put("/:id", updateSubmissionController.execute());
