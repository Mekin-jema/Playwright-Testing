import { test as base, expect as baseExpect, Page } from '@playwright/test';

export const USERS = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  locked: { username: 'locked_out_user', password: 'secret_sauce' },
  problem: { username: 'problem_user', password: 'secret_sauce' },
  glitch: { username: 'performance_glitch_user', password: 'secret_sauce' },
};

async function loginWith(page: Page, username: string, password: string) {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

type Fixtures = {
  login: (username?: string, password?: string) => Promise<void>;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    const fn = async (
      username: string = USERS.standard.username,
      password: string = USERS.standard.password,
    ) => {
      await loginWith(page, username, password);
    };
    await use(fn);
  },
});

export const expect = baseExpect;
