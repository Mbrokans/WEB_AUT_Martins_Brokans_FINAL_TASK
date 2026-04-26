export class BasePage {
  static visit() {
    return cy.visit('https://demoqa.com/automation-practice-form');
  }
  static get firstName() {
    return cy.get('#firstName')
  }
  static get lastName() {
    return cy.get('#lastName')
  }
  static get email() {
    return cy.get('#userEmail')
  }
  static get gender() {
    return cy.get('#gender-radio-1')
  }
  static get phoneNumber() {
    return cy.get('#userNumber')
  }
  static get dateOfBirth() {
    return cy.get('#dateOfBirthInput')
  }
  static get month() {
    return cy.get('.react-datepicker__month-select')
  }
  static get year() {
    return cy.get('.react-datepicker__year-select')
  }
  static get date(){
    return cy.get('.react-datepicker__day--028').not('.react-datepicker__day--outside-month');
  }
  static get subjectInput(){
    return cy.get('#subjectsInput')
  }
  static get hobbyButton() {
    return cy.get('#hobbies-checkbox-3')
  }
  static get StateButton() {
    return cy.get('#react-select-3-input')
  }
  static get cityButton(){
    return cy.get('#city')
  }
  static get submitButton() {
    return cy.get('#submit')
  }
}