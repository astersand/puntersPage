const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.thepunterspage.com/free-bets/',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
