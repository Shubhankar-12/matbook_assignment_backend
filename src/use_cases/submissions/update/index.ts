import { UpdateSubmissionController } from "./controller";
import { UpdateSubmissionUseCase } from "./usecase";

const updateSubmissionUseCase = new UpdateSubmissionUseCase();
export const updateSubmissionController = new UpdateSubmissionController(
  updateSubmissionUseCase
);
