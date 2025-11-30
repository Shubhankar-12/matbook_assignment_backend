import { GetFormSchemaRequest } from "./request";

export class GetFormSchemaValidator {
  private data: GetFormSchemaRequest;

  constructor(data: GetFormSchemaRequest) {
    this.data = data;
  }

  parseRequest(): string[] {
    return [];
  }
}
