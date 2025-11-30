import { GetSubmissionByIdController } from "./controller";
import { GetSubmissionByIdUseCase } from "./usecase";

const getSubmissionByIdUseCase = new GetSubmissionByIdUseCase();
export const getSubmissionByIdController = new GetSubmissionByIdController(
  getSubmissionByIdUseCase
);
