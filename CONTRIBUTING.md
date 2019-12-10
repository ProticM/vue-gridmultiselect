## Vue GridMultiselect Contributing Guide

Thanks for wanting to help on building `vue-gridmultiselect`. Before you start, keep the following things in mind.

- [Issue Reporting](#issue-reporting)
- [Pull Request](#pull-request)
- [Environment Setup](#environment-setup)
- [Financial Contribution](#financial-contribution)

## Issue Reporting

- The issue is considered as valid only if it can be reproduced on the latest master.
- Open an issue on GitHub. The more information you provide, the easier it will be to validate and fix.
- If your PR fixes or references an open issue, please reference it in your message.

## Pull Request

- The `master` branch represents the latest production release. **Please do not push anything directly into this branch**.
- All development should be done in dedicated branches.
- Work under the `src` folder. **Please do not push the `dist` folders**. They are used to store the build files which are published when a release happens.
- Checkout a topic branch from the relevant branch and merge it back when finished.
- If you're working on new functionality, please ensure that your code has good test coverage.

## Environment Setup

You need to install [Node.js](http://nodejs.org). Install the recommended version.

The next step would be to clone the repo and run the following command:

```bash
// install the packages from package.json file
npm install
```

During development process, following commands are available:

```bash
// build the component into dist
npm run build

// run tests
npm run test

// serve at localhost:8080
npm run docs:dev

// build the documentation into dist
npm run docs:build
```

## Financial Contribution

[Donate via PayPal](https://www.paypal.me/mprotic) or [Buy Me a Coffee](https://ko-fi.com/milosprotic).


__Thank you for reading these guidelines and for considering to contribute to vue-gridmultiselect.__