import { CreateSubmissionRequest } from "./request";

export class CreateSubmissionDto {
  values: any;

  constructor(values: any) {
    this.values = values;
  }
}

export class CreateSubmissionDtoConverter {
  private data: CreateSubmissionRequest;

  constructor(data: CreateSubmissionRequest) {
    this.data = data;
  }

  getDtoObject(): CreateSubmissionDto {
    return new CreateSubmissionDto(this.data.values);
  }
}
