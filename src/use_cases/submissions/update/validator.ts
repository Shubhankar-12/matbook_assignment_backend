import { UpdateSubmissionRequest } from "./request";

export class UpdateSubmissionValidator {
  private data: UpdateSubmissionRequest;

  constructor(data: UpdateSubmissionRequest) {
    this.data = data;
  }

  parseRequest(): string[] {
    const errors: string[] = [];
    if (!this.data.id) {
      errors.push("Id is required");
    }
    if (!this.data.values) {
      errors.push("Values are required");
    }
    return errors;
  }
}
