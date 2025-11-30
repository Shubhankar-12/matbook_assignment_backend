import { Request, Response } from "express";
import { GetSubmissionsDtoConverter } from "./dto";
import { GetSubmissionsUseCase } from "./usecase";
import { GetSubmissionsRequest } from "./request";
import { GetSubmissionsValidator } from "./validator";

export class GetSubmissionsController {
  private getSubmissionsUseCase: GetSubmissionsUseCase;

  constructor(getSubmissionsUseCase: GetSubmissionsUseCase) {
    this.getSubmissionsUseCase = getSubmissionsUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.query as unknown as GetSubmissionsRequest;

      // Validate Request
      const validator = new GetSubmissionsValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new GetSubmissionsDtoConverter(requestData);

      // Execute Use Case
      const result = await this.getSubmissionsUseCase.execute({
        request: dtoObject.getDtoObject(),
      });

      res.status(200).json(result);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("GetSubmissionsController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
