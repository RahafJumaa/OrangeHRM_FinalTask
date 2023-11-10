import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
import LoginPageActions from "@pageObjects/OrangeHRMLoginPage/actions";

const loginActions = new LoginPageActions();

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<string>;
    }
  }
}

Cypress.Commands.add("login" , (username: string, password: string) => {
  loginActions.openLoginPage().typeInUsernameField(username).typeInPasswordField(password).clickOnLoginButton();
});
