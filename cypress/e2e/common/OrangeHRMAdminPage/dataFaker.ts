import {JobTitleAPIBody} from "@support/OrangeHRMAdminPage/types";

const getPrefix = (): string => {
    if (window.location.pathname.includes("%2F")) {
        return window.location.pathname.split("%2F").pop().split("")[0];
    }
    return window.location.pathname.split("%5C").pop().split("_")[0];
};

export const getJobTitle = (): JobTitleAPIBody => {
    return {
        "title": `${getPrefix()}Manual QA`,
        "description": "",
        "specification": null,
        "note": ""
    }
};