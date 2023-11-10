Feature: Verify Candidate Process On OrangeHRM

    Scenario: #1 Verify add candidate
        When the admin add a new candidate
        Then the candidate should be moved to Application Initiated status

    Scenario: #2 Verify reject the candidate after the application initiated
        Given the admin added a new candidate
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #3 Verify shortlist the candidate after the application initiated
        Given the admin added a new candidate
        When the admin shortlist the candidate
        Then the candidate should be moved to Shortlisted status

    Scenario: #4 Verify reject the candidate after the candidate shortlisted
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #5 Verify schedule interview after the candidate shortlisted
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        When the admin schedule interview
        Then the candidate should be moved to Interview Scheduled status

    Scenario: #6 Verify reject the candidate after the interview scheduled
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #7 Verify mark interview failed after the interview scheduled
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        When the admin mark the interview Failed
        Then the candidate should be moved to Interview Failed status

    Scenario: #8 Verify mark interview passed after the interview scheduled
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        When the admin mark the interview Passed
        Then the candidate should be moved to Interview Passed status

    Scenario: #9 Verify reject the candidate after the interview failed
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Failed
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #10 Verify reject the candidate after the interview passed
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #11 Verify schedule second interview after the first interview passed
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        When the admin schedule interview
        Then the candidate should be moved to Interview Scheduled status

    Scenario: #12 Verify offer job after the interview passed
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        When the admin offer job
        Then the candidate should be moved to Job Offered status

    Scenario: #13 Verify reject the candidate after the job offered
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job 
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

     Scenario: #14 Verify decline the job offer 
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job 
        When the admin decline the offer
        Then the candidate should be moved to Offer Declined status

     Scenario: #15 Verify hire after the job offer
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job 
        When the admin hire the candidate
        Then the candidate should be moved to Hired status
        
     Scenario: #16 Verify reject the candidate after the offer declined
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job 
        And the admin declined the offer
        When the admin reject the candidate
        Then the candidate should be moved to Rejected status

    Scenario: #17 Verify mark interview passed after the second interview scheduled
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin scheduled interview
        When the admin mark the interview Passed        
        Then the candidate should be moved to second Interview Passed status

    Scenario: #18 Verify that the "Reject" button opens the Reject Candidate form
        Given the admin added a new candidate
        When the admin click on Reject button
        Then the Reject Candidate form should open correctly

    Scenario: #19 Verify that the "Shortlist" button opens the Shortlist Candidate form
        Given the admin added a new candidate
        When the admin click on Shortlist button
        Then the Shortlist Candidate form should open correctly

    Scenario: #20 Verify that the "Schedule Interview" button opens the Schedule Interview form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        When the admin click on Schedule Interview button
        Then the Schedule Interview form should open correctly

    Scenario: #21 Verify that the "Mark Interview Passed" button opens the Mark Interview Passed form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        When the admin click on Mark Interview Passed button
        Then the Mark Interview Passed form should open correctly

    Scenario: #22 Verify that the "Mark Interview Failed" button opens the Mark Interview Failed form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        When the admin click on Mark Interview Failed button
        Then the Mark Interview Failed form should open correctly

    Scenario: #23 Verify that the "Offer Job" button opens the Offer Job form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        When the admin click on Offer Job button
        Then the Offer Job form should open correctly

    Scenario: #24 Verify that the "Decline" button opens the Decline Offer form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job
        When the admin click on Decline button
        Then the Decline Offer form should open correctly

    Scenario: #25 Verify that the "Hire" button opens the Hire Candidate form
        Given the admin added a new candidate
        And the admin shortlisted the candidate
        And the admin scheduled interview
        And the admin marked the interview Passed
        And the admin offered job
        When the admin click on Hire button
        Then the Hire Candidate form should open correctly





   
        








              