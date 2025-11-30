import { GetSubmissionsRequest } from "./request";

export class GetSubmissionsDto {
  skip: number;
  limit: number;

  constructor(skip: number, limit: number) {
    this.skip = skip;
    this.limit = limit;
  }
}

export class GetSubmissionsDtoConverter {
  private data: GetSubmissionsRequest;

  constructor(data: GetSubmissionsRequest) {
    this.data = data;
  }

  getDtoObject(): GetSubmissionsDto {
    const page = Number(this.data.page) || 1;
    const limit = Number(this.data.limit) || 10;
    const skip = (page - 1) * limit;
    return new GetSubmissionsDto(skip, limit);
  }
}
