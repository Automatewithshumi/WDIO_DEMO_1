
const TextBoxPage = require('../pages/elements.page');  // Make sure path is correct

describe('TextBox Form Validation', () => {
    
    it.only('should fill and submit the form successfully', () => {
        browser.url('https://demoqa.com/text-box');
        
        // Interacting with the page elements using methods defined in the page object
       

        // Add assertions to confirm form submission or any expected result
        const confirmationMessage = $('#output');
        expect(confirmationMessage.getText()).to.include('John Doe');
    });

    it('should ensure all fields are displayed correctly', () => {
        browser.url('https://demoqa.com/text-box');

        // Check if all the fields are displayed
        const fullNameField = TextBoxPage.fullNameField;
        expect(fullNameField.isDisplayed()).to.be.true;

        const submitButton = TextBoxPage.submitButton;
        expect(submitButton.isDisplayed()).to.be.true;
    });

    it('should validate empty fields (if necessary)', () => {
        browser.url('https://demoqa.com/text-box');

        // Empty form submission test
        TextBoxPage.submitForm();

        // You can add further validation to check if any validation message is displayed
        const errorMessage = $('#userName-error');  // Assuming there's a validation error message
        expect(errorMessage.isDisplayed()).to.be.true;
    });
});
