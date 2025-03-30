class HeaderPage {
    // Title
    get welcomeText() {
        return $('#userForm > div:nth-child(1) > h2');
    }

}

module.exports = new HeaderPage();