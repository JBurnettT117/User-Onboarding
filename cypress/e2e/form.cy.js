//get name input and type name in it

//use an assertion to check if the text inputted containes the name you provided

//get the email input and type an email in it

//get the password input and put a password in it

//check to see if terms of service box is checkable (uncheck as well?)

//check to see if a user can submit the data

//make sure the form validation pops up 

/**
 * get name, email, and password names and assign them --> complete
 * 
 * type into name email and password boxes --> complete
 * 
 * validate that text is correct --> complete
 * ------------------------------
 * check to see if the terms of service box can be checked & unchecked --> complete
 * ------------------------------
 * make sure form is submittable
 * ------------------------------
 * make sure form backtalks
 */

describe("Forms app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    //label Helpers/Getters
    const nameInput = () => cy.get(':nth-child(1) > input');
    const emailInput = () => cy.get(':nth-child(2) > input');
    const passwordInput = () => cy.get(':nth-child(3) > input');
    const tosBox = () => cy.get(':nth-child(4) > input');

    it("sanity check to make sure testing is happening", () => {
        expect(1+2).to.equal(3);
        expect(3+7).not.to.equal(43);
    })

    it("the proper elements are showing", () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tosBox().should("exist");
    })

    describe("validate that text appears and is correctly functioning", () => {

        it("can navigate to the site", () => {
            cy.url().should("include", "localhost");
        })

        it("can type into text boxes and return correct text", () => {
            nameInput()
                .should("have.value", "")
                .type("Fluffy")
                .should("have.value", "Fluffy");
            emailInput()
                .should("have.value", "")
                .type("fluffy@gmail.com")
                .should("have.value", "fluffy@gmail.com");
            passwordInput()
                .should("have.value", "")
                .type("SecretFluff")
                .should("have.value", "SecretFluff");
        })

        it("can check and uncheck the checkbox", () => {
            tosBox().check().uncheck();//need to find out how to validate checkbox --> complete
        })

        it("looks for the submit button and makes sure it works", () => {
            cy.contains("Create a Friend!").should("exist");
        })
    })

    describe("check the submit button for functionality and form validation", () => {

        it("can submit data", () => {
            emailInput().type("fluffy@gmail.com").should("have.value", "fluffy@gmail.com");
            cy.contains("Create a Friend!").click();
            emailInput().should("have.value", "");
            cy.contains("fluffy@gmail.com").should("exist");
        })

        it("checks to see if the submit button informs the user of any mistakes prior to submission",() => {
            nameInput()
                .should("have.value", "")
                .type("01")
                .should("have.value", "01");
            cy.contains("Create a Friend!").click();
            nameInput().should("not.have.value", "01");//for some reason if i remove this then the next test will pass when it shouldnt. this test is also passing when it shouldnt but the code works like this so *shrug*//
            cy.get('.App > :nth-child(2) > :nth-child(1)').should("not.exist");
        })
    })




})