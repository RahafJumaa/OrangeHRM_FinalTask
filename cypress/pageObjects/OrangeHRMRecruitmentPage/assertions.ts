class RecruitmentPageAssertions{
    waitSpinnerDisappeared() {
        cy.get(".oxd-loading-spinner-container", { timeout: 10000 }).should("not.exist");
        return this;
    }

    checkStatus(status: string){
        cy.get('p').contains(`Status: ${status}`).should('exist');
        return this;
    }

    checkButton(action: string){
        cy.get("button").contains(`${action}`).should('exist');
        return this;
    }

    checkFormHeader(header: string){
        cy.get("h6").contains(`${header}`).should('exist');
        return this;
    }

}
export default RecruitmentPageAssertions