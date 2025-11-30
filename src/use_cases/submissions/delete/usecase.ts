import { submissionQueries } from "../../../db/queries";
import { DeleteSubmissionDto } from "./dto";

type UseCaseRequest = {
  request: DeleteSubmissionDto;
};

export class DeleteSubmissionUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const result = await submissionQueries.deleteSubmission(request.id);
    if (result.deletedCount === 0) {
      return { error: "Submission not found or already deleted" };
    }
    return { message: "Submission deleted successfully" };
  }
}
