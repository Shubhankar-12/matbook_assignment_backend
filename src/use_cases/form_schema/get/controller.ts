import { Request, Response } from "express";
import { GetFormSchemaDtoConverter } from "./dto";
import { GetFormSchemaUseCase } from "./usecase";
import { GetFormSchemaRequest } from "./request";
import { GetFormSchemaValidator } from "./validator";

export class GetFormSchemaController {
  private getFormSchemaUseCase: GetFormSchemaUseCase;

  constructor(getFormSchemaUseCase: GetFormSchemaUseCase) {
    this.getFormSchemaUseCase = getFormSchemaUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.query as unknown as GetFormSchemaRequest;

      // Validate Request
      const validator = new GetFormSchemaValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new GetFormSchemaDtoConverter(requestData);

      // Execute Use Case
      const result = await this.getFormSchemaUseCase.execute({
        request: dtoObject.getDtoObject(),
      });

      res.status(200).json(result);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("GetFormSchemaController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
