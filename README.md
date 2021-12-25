# hellotoms-labs

> React UI Framework built with React

[![NPM](https://img.shields.io/npm/v/hellotoms-labs.svg)](https://www.npmjs.com/package/hellotoms-labs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction
Proudly present galaxy-labs created for help front-end needs. it is a front-end framework to simplify and easily development. this labs is built as follows and there are few library that using for helping create this framework faster. but If I have more time to do I'll replace them with our utility or create by own.
- React
- Styles modules scss
- Typescript Support
- Jest & React Testing Library (testing runner)
- Auto release with semantic-bot
- Commitlint
- Storybook for playground component
- React-table https://react-table.tanstack.com/
- React-select https://react-select.com/home
- React-dates https://github.com/airbnb/react-dates
- Rollup (Bundler)

This project still actively developing for some project over time and there are huge amazing component to be built

## Installation

```bash
npm install --save hellotoms-labs
```

## Basic Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'hellotoms-labs'
// please put this style in your root project instead of import each file
import 'hellotoms-labs/dist/index.css'

class ExamplePage extends Component {
  render() {
    return (
      <div>
        <Button>Press me!</Button>
      </div>
    )
  }
}
```

## Demo
https://github.com/tomibudis/galaxy-labs

## Development
```
yarn storybook
```
Then open your browser on port 6006

## How test component locally
here are the few ways to test component locally
- `yalc` https://github.com/wclr/yalc
- `yarn link` https://classic.yarnpkg.com/en/docs/cli/link/
- `github branch` https://docs.npmjs.com/cli/v8/commands/npm-install (!!is not recomended)

## Commits
All commit message should conform to the conventional commit format and should use following syntax: `type(scope): subject`. While the ype is mandatory, the scope is optional. e.g

```
docs: add README.me
```
```
fix(header): fix margin issue
```
```
feat: button component
```
further information related types https://www.conventionalcommits.org/en/

## License

MIT © [tomibudis](https://github.com/tomibudis)
