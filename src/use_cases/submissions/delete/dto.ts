import { DeleteSubmissionRequest } from "./request";

export class DeleteSubmissionDto {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export class DeleteSubmissionDtoConverter {
  private data: DeleteSubmissionRequest;

  constructor(data: DeleteSubmissionRequest) {
    this.data = data;
  }

  getDtoObject(): DeleteSubmissionDto {
    return new DeleteSubmissionDto(this.data.id);
  }
}
