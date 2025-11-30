import { GetSubmissionByIdRequest } from "./request";

export class GetSubmissionByIdValidator {
  private data: GetSubmissionByIdRequest;

  constructor(data: GetSubmissionByIdRequest) {
    this.data = data;
  }

  parseRequest(): string[] {
    const errors: string[] = [];
    if (!this.data.id) {
      errors.push("Id is required");
    }
    return errors;
  }
}
