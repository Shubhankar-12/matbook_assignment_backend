import { submissionQueries } from "../../../db/queries";
import { UpdateSubmissionDto } from "./dto";

type UseCaseRequest = {
  request: UpdateSubmissionDto;
};

export class UpdateSubmissionUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const result = await submissionQueries.updateSubmission(request.id, {
      values: request.values,
    });
    if (result.matchedCount === 0) {
      return { error: "Submission not found" };
    }
    return { message: "Submission updated successfully" };
  }
}
