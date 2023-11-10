import { JobTitleAPIBody } from "./types";

export const createJobTitleBody = (jobTitleAPIBody : JobTitleAPIBody) => {
    return {
        ...jobTitleAPIBody,
    }
};