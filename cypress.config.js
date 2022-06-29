//from https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Step-3-Configure-Cypress
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080'
  }
});
