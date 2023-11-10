export interface VacancyAPIBody {
    "name": string,
    "jobTitleId": number,
    "employeeId": number,
    "numOfPositions": number,
    "description": string,
    "status": boolean,
    "isPublished": boolean
}

export interface CandidateAPIBody {
    "firstName": string,
    "middleName": string,
    "lastName": string,
    "email": string,
    "contactNumber": string,
    "keywords": string,
    "comment": string,
    "dateOfApplication": string,
    "consentToKeepData": boolean,
    "vacancyId": number
}

export interface ShortlistAPIBody {
    "note": string
}

export interface ScheduleInterviewAPIBody {
    "interviewName": string,
    "interviewDate": string,
    "interviewTime": string,
    "note": string,
    "interviewerEmpNumbers": [number]
}

export interface MarkInterviewFailedAPIBody {
    "note": string
}

export interface MarkInterviewPassedAPIBody {
    "note": string
}

export interface OfferJobAPIBody {
    "note": string
}

export interface DeclineOfferJobAPIBody {
    "note": string
}