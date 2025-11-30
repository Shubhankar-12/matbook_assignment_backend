import { submissionQueries } from "../../../db/queries";
import { GetSubmissionsDto } from "./dto";

type UseCaseRequest = {
  request: GetSubmissionsDto;
};

export class GetSubmissionsUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const submissions = await submissionQueries.getSubmissions(request);

    if (submissions[0].paginatedResults.length == 0) {
      submissions[0].totalCount.push({ count: 0 });
    }

    return submissions[0];
  }
}
