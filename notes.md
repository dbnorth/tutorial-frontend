# Automated Integration Testing


## Set up first tests

1. Install Cypress
```bash
npm install cypress
```
2. Configure `package.json` to support `npm test` and `npm run test:open`:
```json
"scripts": {
  "serve": "vite preview --port 8081",
  "build": "vite build",
  "lint": "vue-cli-service lint",
  "dev": "vite --port 3001",
  "test": "cypress run",
  "test:open": "cypress open"
}
```
3. Create `cypress.config.js` with the following
```js
//from https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Step-3-Configure-Cypress
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080'
  }
});
```
