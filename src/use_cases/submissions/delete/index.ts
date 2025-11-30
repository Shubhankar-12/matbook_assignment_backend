import { DeleteSubmissionController } from "./controller";
import { DeleteSubmissionUseCase } from "./usecase";

const deleteSubmissionUseCase = new DeleteSubmissionUseCase();
export const deleteSubmissionController = new DeleteSubmissionController(
  deleteSubmissionUseCase
);
