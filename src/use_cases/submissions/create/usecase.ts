import { submissionQueries } from "../../../db/queries";
import { CreateSubmissionDto } from "./dto";

type UseCaseRequest = {
  request: CreateSubmissionDto;
};

export class CreateSubmissionUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const submission = await submissionQueries.createSubmission(request);
    return submission;
  }
}
