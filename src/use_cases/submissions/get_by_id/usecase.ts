import { submissionQueries } from "../../../db/queries";
import { GetSubmissionByIdDto } from "./dto";

type UseCaseRequest = {
  request: GetSubmissionByIdDto;
};

export class GetSubmissionByIdUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const submission = await submissionQueries.getSubmissionById(request.id);
    if (!submission) {
      return { error: "Submission not found" };
    }
    return submission;
  }
}
