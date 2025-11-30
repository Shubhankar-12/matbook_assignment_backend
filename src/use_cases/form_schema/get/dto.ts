import { GetFormSchemaRequest } from "./request";

export class GetFormSchemaDto {
  constructor() {}
}

export class GetFormSchemaDtoConverter {
  private data: GetFormSchemaRequest;

  constructor(data: GetFormSchemaRequest) {
    this.data = data;
  }

  getDtoObject(): GetFormSchemaDto {
    return new GetFormSchemaDto();
  }
}
