import { GetSubmissionsRequest } from "./request";

export class GetSubmissionsValidator {
  private data: GetSubmissionsRequest;

  constructor(data: GetSubmissionsRequest) {
    this.data = data;
  }

  parseRequest(): string[] {
    return [];
  }
}
