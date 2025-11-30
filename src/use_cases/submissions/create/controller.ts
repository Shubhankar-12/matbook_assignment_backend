import { Request, Response } from "express";
import { CreateSubmissionDtoConverter } from "./dto";
import { CreateSubmissionUseCase } from "./usecase";
import { CreateSubmissionRequest } from "./request";
import { CreateSubmissionValidator } from "./validator";

export class CreateSubmissionController {
  private createSubmissionUseCase: CreateSubmissionUseCase;

  constructor(createSubmissionUseCase: CreateSubmissionUseCase) {
    this.createSubmissionUseCase = createSubmissionUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData: CreateSubmissionRequest = req.body;

      // Validate Request
      const validator = new CreateSubmissionValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new CreateSubmissionDtoConverter(requestData);

      // Execute Use Case
      const result = await this.createSubmissionUseCase.execute({
        request: dtoObject.getDtoObject(),
      });

      res.status(200).json(result);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("CreateSubmissionController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
