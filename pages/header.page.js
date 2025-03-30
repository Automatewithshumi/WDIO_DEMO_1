class HeaderPage {
    // Login link
    get loginLink() {
        return $('#item-0');
    }

      // Getters for elements on the login page
      get usernameField() {
        return $('#userName'); // Update with actual username field selector
    }

    get passwordField() {
        return $('#password'); // Update with actual password field selector
    }

    get loginButton() {
        return $('#login'); // Update with actual login button selector
    }

    // New User Button
    get newUserButton() {
        return $('#newUser');
    }
    

    // Bookstore link
    get bookStoreLink() {
        return $('#item-2 > span');
    }

    // Profile link
    get profileLink() {
        return $('#item-3 > span');
    }

    // Bookstore API link
    get bookStoreApiLink() {
        return $('#item-4 > span');
    }

}

module.exports = new HeaderPage();
