# WebdriverIO - waitForNotDisplayed Issue

Minimal reproduction case for `waitForNotDisplayed` method issue.

## Quick Start
```bash
# Clone
git clone https://github.com/uivanovic/wdio_issue.git
cd wdio_issue

# Install
pnpm install

# Run test
pnpm test
```

## Issue

The test clicks a button to open a modal, presses Escape to close it, then waits for the element to disappear using `waitForNotDisplayed`.

**Expected**: Element should not be seen as displayed

## Requirements

- Node.js v20.11.1
- pnpm
- Chrome browser
