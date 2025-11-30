import { GetSubmissionsController } from "./controller";
import { GetSubmissionsUseCase } from "./usecase";

const getSubmissionsUseCase = new GetSubmissionsUseCase();
export const getSubmissionsController = new GetSubmissionsController(
  getSubmissionsUseCase
);
