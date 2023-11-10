class LoginPageActions{
    openLoginPage (){
        cy.visit("auth/login");
        return this;
    }
    
    typeInUsernameField (username : string){
        cy.get("[name=username]").clear().type(username);
        return this;
    }
    
    typeInPasswordField (password : string){
        cy.get("[name=password]").clear().type(password);
        return this;
    }
    
    clickOnLoginButton (){
        cy.get("[type=submit]").click();
        return this;
    }
}
export default LoginPageActions