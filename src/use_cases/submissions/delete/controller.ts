import { Request, Response } from "express";
import { DeleteSubmissionDtoConverter } from "./dto";
import { DeleteSubmissionUseCase } from "./usecase";
import { DeleteSubmissionRequest } from "./request";
import { DeleteSubmissionValidator } from "./validator";

export class DeleteSubmissionController {
  private deleteSubmissionUseCase: DeleteSubmissionUseCase;

  constructor(deleteSubmissionUseCase: DeleteSubmissionUseCase) {
    this.deleteSubmissionUseCase = deleteSubmissionUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = { id: req.params.id } as DeleteSubmissionRequest;

      // Validate Request
      const validator = new DeleteSubmissionValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new DeleteSubmissionDtoConverter(requestData);

      // Execute Use Case
      const result = await this.deleteSubmissionUseCase.execute({
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
    console.error("DeleteSubmissionController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
