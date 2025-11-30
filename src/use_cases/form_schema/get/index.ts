import { GetFormSchemaController } from "./controller";
import { GetFormSchemaUseCase } from "./usecase";

const getFormSchemaUseCase = new GetFormSchemaUseCase();
export const getFormSchemaController = new GetFormSchemaController(
  getFormSchemaUseCase
);
