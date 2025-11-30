import { UpdateSubmissionRequest } from "./request";

export class UpdateSubmissionDto {
  id: string;
  values: any;

  constructor(id: string, values: any) {
    this.id = id;
    this.values = values;
  }
}

export class UpdateSubmissionDtoConverter {
  private data: UpdateSubmissionRequest;

  constructor(data: UpdateSubmissionRequest) {
    this.data = data;
  }

  getDtoObject(): UpdateSubmissionDto {
    return new UpdateSubmissionDto(this.data.id, this.data.values);
  }
}
