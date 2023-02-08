const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "env": {
      "url": "https://www.amazon.com/"
    },
    watchForFileChanges:false,
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});