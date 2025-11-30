import { Request, Response } from "express";
import { GetSubmissionByIdDtoConverter } from "./dto";
import { GetSubmissionByIdUseCase } from "./usecase";
import { GetSubmissionByIdRequest } from "./request";
import { GetSubmissionByIdValidator } from "./validator";

export class GetSubmissionByIdController {
  private getSubmissionByIdUseCase: GetSubmissionByIdUseCase;

  constructor(getSubmissionByIdUseCase: GetSubmissionByIdUseCase) {
    this.getSubmissionByIdUseCase = getSubmissionByIdUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = { id: req.params.id } as GetSubmissionByIdRequest;

      // Validate Request
      const validator = new GetSubmissionByIdValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new GetSubmissionByIdDtoConverter(requestData);

      // Execute Use Case
      const result = await this.getSubmissionByIdUseCase.execute({
        request: dtoObject.getDtoObject(),
      });

      if (result && result.error) {
        res.status(404).json(result);
        return;
      }

      res.status(200).json(result);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("GetSubmissionByIdController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
