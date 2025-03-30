const Assert = require('assert');
const LoginPage = require('../pages/login.page'); // Correct path to your page object

describe('Login Functionality', () => {
    // Valid Email: 1@2.com
    // Valid Password: password

    it('should display error when password is missing', async () => {
        await browser.url(''); // Make sure the URL is correct

        // Using the correct LoginPage object (capitalized) and method names
        await LoginPage.emailField.setValue('test@test.com');
        await LoginPage.submitButton.click();

        // Wait for the error message to appear
        await browser.pause(5000);

        // You should assert the error message is shown when password is missing
        const errorMessage = await $('#error-message-id'); // Adjust selector as necessary
        const isVisible = await errorMessage.isDisplayed();
        Assert.strictEqual(isVisible, true, 'Error message is not displayed.');
    });

    it('should display error when password is missing', async () => {
        await browser.url(''); // Your login page URL
        await LoginPage.emailField.setValue('test@test.com');
        await LoginPage.submitButton.click();
        await browser.pause(5000); // Adjust based on expected error message load time
        
        const errorMessage = await $('#error-message-id'); // Adjust the selector
        const isVisible = await errorMessage.isDisplayed();
        Assert.strictEqual(isVisible, true, 'Error message not displayed for missing password');
    });

    it('should display error when email is missing', async () => {
        await browser.url(''); // Your login page URL
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.pause(5000); // Adjust based on expected error message load time
        
        const errorMessage = await $('#error-message-id'); // Adjust the selector
        const isVisible = await errorMessage.isDisplayed();
        Assert.strictEqual(isVisible, true, 'Error message not displayed for missing email');
    });

    it('should display error for invalid email format', async () => {
        await browser.url(''); // Your login page URL
        await LoginPage.emailField.setValue('invalid-email.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.pause(5000); // Adjust based on expected error message load time
        
        const errorMessage = await $('#error-message-id'); // Adjust the selector
        const isVisible = await errorMessage.isDisplayed();
        Assert.strictEqual(isVisible, true, 'Error message not displayed for invalid email');
    });

    it('should log in successfully with valid credentials', async () => {
        await browser.url(''); // Your login page URL
        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.pause(5000); // Adjust based on expected redirect time
        
        const currentUrl = await browser.getUrl();
        Assert.strictEqual(currentUrl, 'http://localhost:8080/dashboard', 'User is not redirected to the dashboard');
    });
    
    it('should remember the user when "Remember Me" is checked', async () => {
        await browser.url(''); // Your login page URL
        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.rememberLoginCheckbox.click();
        await LoginPage.submitButton.click();
        await browser.pause(5000); // Adjust based on expected redirect time
        
        // Reopen the browser and check if the user is still logged in
        await browser.reloadSession();
        await browser.url(''); // Your login page URL
        const emailValue = await LoginPage.emailField.getValue();
        
        Assert.strictEqual(emailValue, 'valid@user.com', 'Email is not persisted after login');
    });

    it('should disable submit button when email and password fields are empty', async () => {
        await browser.url(''); // Your login page URL
        const isSubmitButtonEnabled = await LoginPage.submitButton.isEnabled();
        Assert.strictEqual(isSubmitButtonEnabled, false, 'Submit button should be disabled when fields are empty');
    });

    

});
