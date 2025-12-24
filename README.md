# Saucedemo Playwright Tests

A Playwright test suite for https://www.saucedemo.com covering login, inventory, sorting, cart, checkout, menu, and footer links.

## Requirements
- Node.js 20+
- pnpm 8+

## Setup
```fish
pnpm install
pnpm exec playwright install
```

## Useful Commands
```fish
pnpm exec playwright test          # run full suite
pnpm exec playwright test tests/login.spec.ts   # run a single spec
pnpm exec playwright test --headed # debug in headed mode
pnpm exec playwright test --ui     # interactive test runner
pnpm exec playwright show-report   # open last HTML report
```

## Project Structure
- `playwright.config.ts` — Playwright config (baseURL set to Saucedemo).
- `tests/fixtures.ts` — shared fixtures and login helper.
- `tests/pages/` — page objects (login, inventory, cart, checkout).
- `tests/*.spec.ts` — end-to-end specs for core flows.

## Selector Strategy
- Prefer accessible locators: `getByPlaceholder` for inputs, `getByRole` for buttons/links.
- Use `[data-test="..."]` only where the site exposes stable test hooks.

## Notes
- Reports and traces are generated on failures/retries (HTML report at `playwright-report/`).
- If you see timeouts on login, confirm the login fields render; the helper asserts visibility after `page.goto('/')`.
