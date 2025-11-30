import { SubmissionModel } from "../submissions/model";
import { ISubmissionDocument } from "../submissions/types";
import { Types, Model } from "mongoose";

const ObjectId = Types.ObjectId;

export class SubmissionQueries {
  private submissionModel: Model<ISubmissionDocument>;

  constructor() {
    this.submissionModel = SubmissionModel;
  }

  createSubmission = async (data: any): Promise<any> => {
    return await this.submissionModel.create(data);
  };

  getSubmissions = async (data: any): Promise<any> => {
    let aggregateQuery: any[] = [];

    // Sort by created_at descending (newest first)
    aggregateQuery.push({ $sort: { created_at: -1 } });

    aggregateQuery.push({
      $project: {
        _id: 0,
        id: "$_id",
        name: 1,
        email: 1,
        phone: 1,
        linkedin_profile: 1,
        portfolio_link: 1,
        created_at: 1,
        updated_at: 1,
      },
    });

    const $facet: any = {
      paginatedResults: [],
      totalCount: [{ $count: "count" }],
    };
    if (data.skip != undefined) {
      $facet.paginatedResults.push({ $skip: data.skip });
    }
    if (data.limit != undefined) {
      $facet.paginatedResults.push({ $limit: data.limit });
    }
    aggregateQuery.push({ $facet });

    return await this.submissionModel.aggregate(aggregateQuery);
  };

  getSubmissionById = async (id: string): Promise<any> => {
    const submission = await this.submissionModel.findById(id);
    if (!submission) return null;
    return {
      id: submission._id,
      values: submission.values,
      created_at: submission.created_at,
      updated_at: submission.updated_at,
    };
  };

  deleteSubmission = async (id: string): Promise<any> => {
    return await this.submissionModel.deleteOne({ _id: new ObjectId(id) });
  };

  updateSubmission = async (id: string, data: any): Promise<any> => {
    return await this.submissionModel.updateOne(
      { _id: new ObjectId(id) },
      data
    );
  };
}
