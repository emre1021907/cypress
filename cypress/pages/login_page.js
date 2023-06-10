export class LoginPage{

    loginpage_username = '#uname'
    loginpage_password = '#pwd'
    loginpage_submit = '[type="submit"]'
 
    navigate(url){
        cy.visit(url)
    }
    enterUserName(uname){
        cy.get(this.loginpage_username).type(uname)
    }
    enterPassword(pwd){
        cy.get(this.loginpage_password).type(pwd)
    }
    clickLogin(){
        cy.get(this.loginpage_submit).click()
    }

}