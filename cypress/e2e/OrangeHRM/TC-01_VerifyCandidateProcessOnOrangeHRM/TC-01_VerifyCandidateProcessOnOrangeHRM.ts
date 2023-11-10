import {Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AdminPageDataUtils from "@pageObjects/OrangeHRMAdminPage/dataUtils";
import EmployeePageDataUtils from "@pageObjects/OrangeHRMEmployeePage/dataUtils";
import RecruitmentPageDataUtils from "@pageObjects/OrangeHRMRecruitmentPage/dataUtils";
import RecruitmentPageActions from "@pageObjects/OrangeHRMRecruitmentPage/actions";
import RecruitmentPageAssertions from "@pageObjects/OrangeHRMRecruitmentPage/assertions";
import {getJobTitle} from "../../common/OrangeHRMAdminPage/dataFaker";
import {getEmployee} from "../../common/OrangeHRMEmployeePage/dataFaker";
import {getVacancy,getCandidate,getShortlist, getScheduleInterview, getMarkInterviewFailed, getMarkInterviewPassed, getOfferJob, getDeclineOfferJob} from "../../common/OrangeHRMRecruitmentPage/dataFaker";

const adminAPI = new AdminPageDataUtils();
const employeeAPI = new EmployeePageDataUtils();
const recruitmentAPI = new RecruitmentPageDataUtils();
const recruitmentActions = new RecruitmentPageActions();
const recruitmentAssertions = new RecruitmentPageAssertions();
const jobTitle = getJobTitle();
const employee = getEmployee();
const vacancy = getVacancy();
const candidate = getCandidate();
const shortlist = getShortlist();
const scheduleInterview = getScheduleInterview();
const markInterviewFailed = getMarkInterviewFailed();
const markInterviewPassed = getMarkInterviewPassed();
const offerJob = getOfferJob();
const declineJob = getDeclineOfferJob();

let jobTitleId: number;
let  empNumber: number;
let vacancyId: number;
let candidateId: number;
let interviewId: number;
beforeEach(() => {
  cy.login("Admin","admin123");
  adminAPI.createJobTitle(jobTitle).then((response)=>
  {
    jobTitleId = response.data.id;
  employeeAPI.createEmployee(employee).then((response)=>
  {
    empNumber = response.data.empNumber;
  recruitmentAPI.createVacancy({...vacancy, employeeId:empNumber, jobTitleId:jobTitleId}).then((response)=>
    {
      vacancyId = response.data.id;
    });
    });
    });
});

When("the admin add a new candidate", () => {
  recruitmentActions.navigateToAddCandidatePage().typeIntoFirstNameField(candidate.firstName).typeIntoLastNameField(candidate.lastName).selectFromVacency(vacancy.name).typeIntoEmailField(candidate.email).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Application Initiated status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Application Initiated").checkButton("Reject").checkButton("Shortlist");
});

Given("the admin added a new candidate", () => {
recruitmentAPI.createCandidate({...candidate, vacancyId:vacancyId}).then((response)=>
  {
    candidateId = response.data.id;
  });
});

When("the admin reject the candidate", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Reject"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Rejected status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Rejected");
});

When("the admin shortlist the candidate", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Shortlist"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Shortlisted status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Shortlisted").checkButton("Reject").checkButton("Schedule Interview");
});

Given("the admin shortlisted the candidate", () => {
recruitmentAPI.shortlistCandidate(candidateId, shortlist);
});

When("the admin schedule interview", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Schedule Interview"}`).typeIntoInterviewTitleField(scheduleInterview.interviewName).typeIntoInterviewerField(employee.firstName+" "+employee.lastName).selectDate(scheduleInterview.interviewDate).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Interview Scheduled status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Interview Scheduled").checkButton("Reject").checkButton("Mark Interview Failed").checkButton("Mark Interview Passed");
});

Given("the admin scheduled interview", () => {
  recruitmentAPI.scheduleInterview(candidateId, {...scheduleInterview,interviewerEmpNumbers: [empNumber]}).then((response)=>
  {
    interviewId = response.data.id;
  });;
});

When("the admin mark the interview Failed", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Mark Interview Failed"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Interview Failed status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Interview Failed").checkButton("Reject");
});

When("the admin mark the interview Passed", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Mark Interview Passed"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Interview Passed status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Interview Passed").checkButton("Reject").checkButton("Schedule Interview").checkButton("Offer Job");
});

Then("the candidate should be moved to second Interview Passed status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Interview Passed").checkButton("Reject").checkButton("Offer Job");
});

Given("the admin marked the interview Failed", () => {
  recruitmentAPI.markInterviewFailed(candidateId, interviewId, markInterviewFailed);
});

Given("the admin marked the interview Passed", () => {
  recruitmentAPI.markInterviewPassed(candidateId, interviewId, markInterviewPassed);
});

When("the admin offer job", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Offer Job"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Job Offered status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Job Offered").checkButton("Reject").checkButton("Offer Declined").checkButton("Hire");
});

Given("the admin offered job", () => {
  recruitmentAPI.offerJob(candidateId, offerJob);
});

When("the admin decline the offer", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Decline"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Offer Declined status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Offer Declined").checkButton("Reject");
});

When("the admin hire the candidate", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Hire"}`).clickOnButton(`${"Save"}`);
});

Then("the candidate should be moved to Hired status", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkStatus("Hired");
});

Given("the admin declined the offer", () => {
  recruitmentAPI.declineOfferJob(candidateId, declineJob);
});

When("the admin click on Reject button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Reject"}`);
});

Then("the Reject Candidate form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Reject Candidate");
});

When("the admin click on Shortlist button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Shortlist"}`);
});

Then("the Shortlist Candidate form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Shortlist Candidate");
});

When("the admin click on Schedule Interview button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Schedule Interview"}`);
});

Then("the Schedule Interview form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Schedule Interview");
});

When("the admin click on Mark Interview Passed button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Mark Interview Passed"}`);
});

Then("the Mark Interview Passed form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Mark Interview Passed");
});

When("the admin click on Mark Interview Failed button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Schedule Interview"}`);
});

Then("the Mark Interview Failed form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Mark Interview Failed");
});

When("the admin click on Offer Job button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Offer Job"}`);
});

Then("the Offer Job form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Offer Job");
});

When("the admin click on Decline button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Decline"}`);
});

Then("the Decline Offer form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Decline Offer");
});

When("the admin click on Hire button", () => {
  recruitmentActions.navigateToApplicationStagePage(candidateId).clickOnButton(`${"Hire"}`);
});

Then("the Hire Candidate form should open correctly", () => {
  recruitmentAssertions.waitSpinnerDisappeared().checkFormHeader("Hire Candidate");
});

afterEach(() => {
  adminAPI.deleteJobTitle(jobTitleId);
  employeeAPI.deleteEmployee(employee.employeeId);
  recruitmentAPI.deleteVacancy(vacancyId);
  recruitmentAPI.deleteCandidate(candidateId);
});



