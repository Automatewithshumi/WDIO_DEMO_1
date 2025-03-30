class LoginPage {
    // Heading text of the login page
    get headingText() {
        return $('#login-title');
    }

    // Email field label
    get emailFieldLabel() {
        return $('#form-login > div:nth-child(1) > label');
    }

    // Email input field
    get emailField() {
        return $('#loginEmail');
    }

    // Password field label
    get passwordFieldLabel() {
        return $('#form-login > div:nth-child(2) > label');
    }

    // Password input field
    get passwordField() {
        return $('#loginPassword');
    }

    // Remember me checkbox
    get rememberLoginCheckbox() {
        return $('#rememberLoginChk');
    }

    // Remember me label
    get rememberLoginLabel() {
        return $('#form-login > div.form-check > label');
    }

    // Submit button
    get submitButton() {
        return $('#form-login > button');
    }
}

module.exports = new LoginPage();
