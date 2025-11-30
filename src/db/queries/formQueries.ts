import { FormModel } from "../forms/model";
import { IFormDocument } from "../forms/types";
import { Model } from "mongoose";

export class FormQueries {
  private formModel: Model<IFormDocument>;

  constructor() {
    this.formModel = FormModel;
  }

  getFormSchema = async (): Promise<any> => {
    return await this.formModel.findOne({});
  };
}
