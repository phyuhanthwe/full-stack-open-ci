/* global require, global */

const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://localhost:5001',
    headless: true,
  },
  webServer: {
    command: 'npm run start:test',
    port: 5001,
    reuseExistingServer: !process.env.CI,
  },
})