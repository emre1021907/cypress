import {LoginPage} from "../pages/login_page"


const lp = new LoginPage()

it('login trytest', ()=> {

    
    lp.navigate("https://trytestingthis.netlify.app/")
    lp.enterUserName("test")
    lp.enterPassword("test")
    lp.clickLogin()


    //cy.visit("https://trytestingthis.netlify.app/")
    //cy.get('#uname').type("test")
    //cy.get('#pwd').type("test")
    //cy.get('[type="submit"]').click()
})


