import { GetSubmissionByIdRequest } from "./request";

export class GetSubmissionByIdDto {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export class GetSubmissionByIdDtoConverter {
  private data: GetSubmissionByIdRequest;

  constructor(data: GetSubmissionByIdRequest) {
    this.data = data;
  }

  getDtoObject(): GetSubmissionByIdDto {
    return new GetSubmissionByIdDto(this.data.id);
  }
}
