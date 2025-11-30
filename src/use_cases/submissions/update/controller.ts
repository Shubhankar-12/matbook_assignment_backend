import { Request, Response } from "express";
import { UpdateSubmissionDtoConverter } from "./dto";
import { UpdateSubmissionUseCase } from "./usecase";
import { UpdateSubmissionRequest } from "./request";
import { UpdateSubmissionValidator } from "./validator";

export class UpdateSubmissionController {
  private updateSubmissionUseCase: UpdateSubmissionUseCase;

  constructor(updateSubmissionUseCase: UpdateSubmissionUseCase) {
    this.updateSubmissionUseCase = updateSubmissionUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = {
        id: req.params.id,
        values: req.body.values,
      } as UpdateSubmissionRequest;

      // Validate Request
      const validator = new UpdateSubmissionValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new UpdateSubmissionDtoConverter(requestData);

      // Execute Use Case
      const result = await this.updateSubmissionUseCase.execute({
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
    console.error("UpdateSubmissionController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
