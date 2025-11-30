import { CreateSubmissionController } from "./controller";
import { CreateSubmissionUseCase } from "./usecase";

const createSubmissionUseCase = new CreateSubmissionUseCase();
export const createSubmissionController = new CreateSubmissionController(
  createSubmissionUseCase
);
