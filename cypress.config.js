const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // For generating HTML Reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on); //For HTML Reports
    },
  },
});
