import { DeleteSubmissionRequest } from "./request";

export class DeleteSubmissionValidator {
  private data: DeleteSubmissionRequest;

  constructor(data: DeleteSubmissionRequest) {
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
