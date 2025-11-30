import { formQueries } from "../../../db/queries";
import { GetFormSchemaDto } from "./dto";

type UseCaseRequest = {
  request: GetFormSchemaDto;
};

export class GetFormSchemaUseCase {
  async execute({ request }: UseCaseRequest): Promise<any> {
    const formSchema = await formQueries.getFormSchema();
    return formSchema;
  }
}
