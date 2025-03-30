class RosterPage {
    // Define selectors for the elements on the Roster Page
    get rosterTable() {
        return $('#roster-table'); // Replace with actual selector for the table
    }

    get addMemberButton() {
        return $('#add-member-button'); // Replace with actual selector for the add member button
    }

    get memberNameField() {
        return $('#member-name'); // Replace with actual selector for the name field
    }

    get memberRoleField() {
        return $('#member-role'); // Replace with actual selector for the role field
    }

    get submitButton() {
        return $('#submit-button'); // Replace with actual selector for the submit button
    }

    get deleteButton() {
        return $('.delete-button'); // Replace with actual selector for the delete button
    }

    get editButton() {
        return $('.edit-button'); // Replace with actual selector for the edit button
    }

    // Method to open the Roster Page
    async open() {
        await browser.url('http://yourwebsite.com/roster'); // Replace with actual URL of the roster page
    }

    // Method to add a new roster member
    async addRosterMember(name, role) {
        await this.addMemberButton.click(); // Click the add member button
        await this.memberNameField.setValue(name); // Set the name field
        await this.memberRoleField.setValue(role); // Set the role field
        await this.submitButton.click(); // Submit the new member form
    }

    // Method to edit a roster member's details
    async editRosterMember(index, newName, newRole) {
        const members = await $$('#roster-table tbody tr'); // Get all rows in the roster table
        const member = members[index]; // Get the specific row based on index

        await member.$(this.editButton).click(); // Click the edit button for the member at the given index
        await this.memberNameField.setValue(newName); // Set the new name
        await this.memberRoleField.setValue(newRole); // Set the new role
        await this.submitButton.click(); // Submit the edited member form
    }

    // Method to delete a roster member
    async deleteRosterMember(index) {
        const members = await $$('#roster-table tbody tr'); // Get all rows in the roster table
        const member = members[index]; // Get the specific row based on index

        await member.$(this.deleteButton).click(); // Click the delete button for the member at the given index
        await browser.acceptAlert(); // If there's a confirmation alert, accept it (depending on your implementation)
    }

    // Method to check if a member exists in the roster table
    async isMemberInRoster(name) {
        const rows = await this.rosterTable.$$('<tr>'); // Get all rows in the roster table
        for (let row of rows) {
            const cell = await row.$('td:first-child'); // Assuming the name is in the first column
            const cellText = await cell.getText();
            if (cellText === name) {
                return true; // Return true if the name matches
            }
        }
        return false; // Return false if the name isn't found in any row
    }
}

module.exports = new RosterPage();
