import { CandidateAPIBody, VacancyAPIBody, ShortlistAPIBody, ScheduleInterviewAPIBody, MarkInterviewFailedAPIBody, MarkInterviewPassedAPIBody, OfferJobAPIBody, DeclineOfferJobAPIBody } from "./types";

export const createVacancyBody = (vacancyAPIBody : VacancyAPIBody) => {
    return {
        ...vacancyAPIBody,
    }
};

export const createCandidateBody = (candidateAPIBody : CandidateAPIBody) => {
    return {
        ...candidateAPIBody,
    }
};

export const createShortlistBody = (shortlistAPIBody : ShortlistAPIBody) => {
    return {
        ...shortlistAPIBody,
    }
};

export const createScheduleInterviewBody = (scheduleInterviewAPIBody : ScheduleInterviewAPIBody) => {
    return {
        ...scheduleInterviewAPIBody,
    }
};

export const createMarkInterviewFailedBody = (markInterviewFailedAPIBody : MarkInterviewFailedAPIBody) => {
    return {
        ...markInterviewFailedAPIBody,
    }
};

export const createMarkInterviewPassedBody = (markInterviewPassedAPIBody : MarkInterviewPassedAPIBody) => {
    return {
        ...markInterviewPassedAPIBody,
    }
};

export const createOfferJobBody = (offerJobAPIBody : OfferJobAPIBody) => {
    return {
        ...offerJobAPIBody,
    }
};

export const createDeclineOfferJobBody = (declineOfferJobAPIBody : DeclineOfferJobAPIBody) => {
    return {
        ...declineOfferJobAPIBody,
    }
};