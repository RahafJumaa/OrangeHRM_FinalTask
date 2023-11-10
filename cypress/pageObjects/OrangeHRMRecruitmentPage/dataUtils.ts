import { createVacancyBody, createCandidateBody, createShortlistBody, createScheduleInterviewBody, createMarkInterviewFailedBody, createMarkInterviewPassedBody, createOfferJobBody, createDeclineOfferJobBody } from "@support/OrangeHRMRecruitmentPage/constants";
import { CandidateAPIBody, VacancyAPIBody, ShortlistAPIBody, ScheduleInterviewAPIBody, MarkInterviewFailedAPIBody, MarkInterviewPassedAPIBody, OfferJobAPIBody, DeclineOfferJobAPIBody } from "@support/OrangeHRMRecruitmentPage/types";
class RecruitmentPageDataUtils{
    createVacancy(vacancyAPIBody: VacancyAPIBody){
        return cy.request({
             method: 'POST',
             url: 'api/v2/recruitment/vacancies',
             body: createVacancyBody(vacancyAPIBody),
           }).then((response) => response.body
           );
     }

     getVacancyByJobTitleID(id :number){
      return cy.request({
        method: 'GET',
        url: `api/v2/recruitment/vacancies?limit=50&offset=0&jobTitleId=${id}&sortField=vacancy.name&sortOrder=ASC&model=detailed`,
      }).then((response) => response.body
      );
    } 

     deleteVacancy(id: number){
      this.getVacancyByJobTitleID(id).then((response) => {
        if (Array.isArray(response) && response.length === 0) {
         return;
         }
         else {
      return cy.request({
           method: 'DELETE',
           url: 'api/v2/recruitment/vacancies',
           body: {"ids": [id]},
         }).then((response) => response.body
         );
        }
      });       
   }

     createCandidate(candidateAPIBody: CandidateAPIBody){
        return cy.request({
            method: 'POST',
            url: 'api/v2/recruitment/candidates',
            body: createCandidateBody(candidateAPIBody),
          }).then((response) => response.body
          );        
     }

     deleteCandidate(id: number){
      return cy.request({
          method: 'DELETE',
          url: 'api/v2/recruitment/candidates',
          body: {"ids": [id]},
        }).then((response) => response.body
        );        
   }

   shortlistCandidate(candidateId: number, shortlistAPIBody: ShortlistAPIBody){
    return cy.request({
        method: 'PUT',
        url: `api/v2/recruitment/candidates/${candidateId}/shortlist`,
        body: createShortlistBody(shortlistAPIBody),
      }).then((response) => response.body
      );        
 }

   scheduleInterview(candidateId: number, scheduleInterviewAPIBody: ScheduleInterviewAPIBody){
    return cy.request({
        method: 'POST',
        url: `api/v2/recruitment/candidates/${candidateId}/shedule-interview`,
        body: createScheduleInterviewBody(scheduleInterviewAPIBody),
      }).then((response) => response.body
      );        
 }
 
    markInterviewFailed(candidateId: number, interviewId: number, markInterviewFailedAPIBody: MarkInterviewFailedAPIBody){
    return cy.request({
        method: 'PUT',
        url: `api/v2/recruitment/candidates/${candidateId}/interviews/${interviewId}/fail`,
        body: createMarkInterviewFailedBody(markInterviewFailedAPIBody),
      }).then((response) => response.body
      );        
 }

     markInterviewPassed(candidateId: number, interviewId: number, markInterviewPassedAPIBody: MarkInterviewPassedAPIBody){
    return cy.request({
        method: 'PUT',
        url: `api/v2/recruitment/candidates/${candidateId}/interviews/${interviewId}/pass`,
        body: createMarkInterviewPassedBody(markInterviewPassedAPIBody),
      }).then((response) => response.body
      );        
 }

     offerJob(candidateId: number, offerJobAPIBody: OfferJobAPIBody){
    return cy.request({
        method: 'PUT',
        url: `api/v2/recruitment/candidates/${candidateId}/job/offer`,
        body: createOfferJobBody(offerJobAPIBody),
      }).then((response) => response.body
      );        
 }

     declineOfferJob(candidateId: number, declineOfferJobAPIBody: DeclineOfferJobAPIBody){
    return cy.request({
        method: 'PUT',
        url: `api/v2/recruitment/candidates/${candidateId}/job/decline`,
        body: createDeclineOfferJobBody(declineOfferJobAPIBody),
      }).then((response) => response.body
      );        
 }
}
export default RecruitmentPageDataUtils
