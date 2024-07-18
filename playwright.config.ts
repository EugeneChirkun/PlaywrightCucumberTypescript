import { defineConfig } from '@playwright/test';

export default defineConfig({
  expect: {
    timeout: 45 * 1000
  }
});
