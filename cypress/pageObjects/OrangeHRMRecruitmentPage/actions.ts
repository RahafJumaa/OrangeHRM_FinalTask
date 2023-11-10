class RecruitmentPageActions{
    navigateToAddCandidatePage(){
        cy.visit(`recruitment/addCandidate`); 
        return this;
    }

    typeIntoFirstNameField(firstName: string){
        cy.get("[name=firstName]").clear().type(firstName);
        return this;
    }

    typeIntoLastNameField(lastName: string){
        cy.get("[name=lastName]").clear().type(lastName);
        return this;
    }

    selectFromVacency(vacancyName: string){
        cy.get(".oxd-select-text-input").click().get("[role=option]").contains(vacancyName).click();
        return this;
    }

    typeIntoEmailField(email: string){
        cy.get("[placeholder='Type here']").eq(0).clear().type(email);
        return this;
    }
    
    typeIntoInterviewTitleField(interviewTitle: string){
        cy.get("input").eq(5).type(interviewTitle,{force: true});
        return this;
    }

    typeIntoInterviewerField(interviewer: string){
        cy.get("input").eq(6).type(interviewer,{force: true});
        cy.wait(1000);
        cy.get("[role=option]").click();
        return this;
    }
    
    selectDate(date: string){
        cy.get("input").eq(7).type(date,{force: true});
        return this;
    }

    clickOnButton(action: string){
        cy.get("button").contains(`${action}`).click({force: true});
        return this;
    }
    
    navigateToApplicationStagePage(id: number){
        cy.intercept('GET',`web/index.php/core/i18n/messages`).as("messages");
        cy.intercept('GET',`web/index.php/api/v2/recruitment/candidates/${id}`).as("candidate");
        cy.intercept('GET',`web/index.php/api/v2/recruitment/candidates/${id}/actions/allowed`).as("allowed");
        cy.intercept('GET',`web/index.php/api/v2/recruitment/**`).as("vacancies"); 
        cy.intercept('GET',`web/index.php/api/v2/leave/**`).as("workweek");
        cy.intercept('GET',`web/index.php/api/v2/recruitment/candidates/${id}/**`).as("history");
        cy.visit(`recruitment/addCandidate/${id}`);
        cy.wait("@messages");
        cy.wait("@candidate");
        cy.wait("@allowed");
        cy.wait("@vacancies");
        cy.wait("@workweek");
        cy.wait("@history");
        return this;
    }
}
export default RecruitmentPageActions