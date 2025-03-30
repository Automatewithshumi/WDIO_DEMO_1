class TextBoxPage {
    // Define the selectors for the elements on the page
    get fullNameField() {
        return $('#userName');  // Ensure this targets the correct input field for full name
    }

    get submitButton() {
        return $('#submit');  // Ensure this targets the correct submit button
    }


}

module.exports = new TextBoxPage();
