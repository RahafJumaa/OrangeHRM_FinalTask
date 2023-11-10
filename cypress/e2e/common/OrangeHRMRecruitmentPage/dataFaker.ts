import {CandidateAPIBody, VacancyAPIBody, ShortlistAPIBody, ScheduleInterviewAPIBody, MarkInterviewFailedAPIBody, MarkInterviewPassedAPIBody, OfferJobAPIBody, DeclineOfferJobAPIBody} from "@support/OrangeHRMRecruitmentPage/types";
import moment from "moment-timezone";

const dateOfApplication = moment().format("YYYY-MM-DD");
const dateOfInterview =  moment().add(3, 'days').format("YYYY-MM-DD");;
const getPrefix = (): string => {
    if (window.location.pathname.includes("%2F")) {
        return window.location.pathname.split("%2F").pop().split("")[0];
    }
    return window.location.pathname.split("%5C").pop().split("_")[0];
};

export const getVacancy = (): VacancyAPIBody => {
    return {
        "name": `${getPrefix()}Manual QA`,
        "jobTitleId": 0,
        "employeeId": 0,
        "numOfPositions": 2,
        "description": "sth",
        "status": true,
        "isPublished": true
    }
};

export const getCandidate = (): CandidateAPIBody => {
    return {
        "firstName": `${getPrefix()}Rahaf`,
        "middleName": `Suliman`,
        "lastName": `Jumaa`,
        "email": "rahaf@gmail.com",
        "contactNumber": "0594421234",
        "keywords": "qa",
        "comment": "sth",
        "dateOfApplication": dateOfApplication,
        "consentToKeepData": true,
        "vacancyId": 0
    }
};

export const getShortlist = (): ShortlistAPIBody => {
    return {
        "note": null
    }
};

export const getScheduleInterview = (): ScheduleInterviewAPIBody => {
    return {
        "interviewName": "QA Position",
        "interviewDate": dateOfInterview,
        "interviewTime": "",
        "note": "",
        "interviewerEmpNumbers": [0]
    }
};

export const getMarkInterviewFailed = (): MarkInterviewFailedAPIBody => {
    return {
        "note": null
    }
};

export const getMarkInterviewPassed = (): MarkInterviewPassedAPIBody => {
    return {
        "note": null
    }
};

export const getOfferJob = (): OfferJobAPIBody => {
    return {
        "note": null
    }
};

export const getDeclineOfferJob = (): DeclineOfferJobAPIBody => {
    return {
        "note": null
    }
};

