import { BasePage } from "../pageObjects/basePage";

describe('demoqa tasks', () => {
    beforeEach(() => {
      BasePage.visit();
    });
    it('scenario inputs', () =>{
      BasePage.firstName.type('John');
      BasePage.lastName.type('Doe');
      BasePage.email.type('JohnDoe@example.com');
      BasePage.gender.click();
      BasePage.phoneNumber.type('9999999999');
      BasePage.dateOfBirth.click();
      BasePage.month.select('February');
      BasePage.year.select('1930');
      BasePage.date.contains(28).click();
      BasePage.subjectInput.click().type('Economics');
      BasePage.hobbyButton.click();
      cy.get('input[type=file]').selectFile('C:\\Software_automation\\WEB_AUT_YOURFIRSTNAME_YOURLASTNAME_FINAL_TASK\\files\\file.json');
      BasePage.StateButton.click();
      cy.contains('NCR').click();
      BasePage.cityButton.click();
      cy.contains('Delhi').click();
      BasePage.submitButton.click(); 
    });
});