import express from "express";

// import { jobRouter } from "./jobRouter";
import { formSchemaRouter } from "./formSchemaRouter";
import { submissionRouter } from "./submissionRouter";

const apiRouter = express.Router();
// apiRouter.use("/jobs", jobRouter);
apiRouter.use("/form-schema", formSchemaRouter);
apiRouter.use("/submissions", submissionRouter);

export { apiRouter };
