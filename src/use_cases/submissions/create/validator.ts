import { CreateSubmissionRequest } from "./request";

export class CreateSubmissionValidator {
  private data: CreateSubmissionRequest;

  constructor(data: CreateSubmissionRequest) {
    this.data = data;
  }

  parseRequest(): string[] {
    const errors: string[] = [];
    if (!this.data.values) {
      errors.push("Values are required");
    }
    return errors;
  }
}
