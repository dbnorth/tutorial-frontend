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
