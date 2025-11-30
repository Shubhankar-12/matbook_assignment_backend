import express from "express";
import { getFormSchemaController } from "../use_cases/form_schema/get";

export const formSchemaRouter = express.Router();

formSchemaRouter.get("/", getFormSchemaController.execute());
