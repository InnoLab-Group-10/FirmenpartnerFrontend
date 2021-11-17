# Getting Started

## Important Note

This project uses nodejs version 16.13.0. You can download it from [the official website](https://nodejs.org). If you need a different node version for another project you can look into nvm which is available for Linux, but there is also a port for Windows ([see here](https://github.com/coreybutler/nvm-windows)).

## First Installation

### `npm install`

You should also configure Prettier to run on file save. Navigate to File > Preferences > Settings and search for "Format on Save" and turn it on.
Not sure if it's necessary, but try to pressing ALT + SHIFT + F, it might prompt you to set your default formatter. In this case choose Prettier. If its still not working set your Default Editor manually. You can find this setting where you found the "Format on Save" option.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Recommended VS Code Plugins

In order to simplify developing with React there are a number of plugins that should be installed:

* ES7 React/Redux/GraphQL/React-Native
* vscode-styled-components
* Prettier - Code formatter

Some more suggestions:

* Bracket Pair Colorizer 2
* Auto Rename Tag

Note that this project uses a config file for Prettier which overrides most of the default settings so formatting always stays the same!

# Contributing guide
## Folder descriptions
* src/components
  * for components of all kind, subfolders are welcome
* src/pages
  * for components that are used inside src/App.js and are basically the root components for the different pages
* src/store
  * for the redux store (TBD)

## Naming and formatting
* Formatting is mostly enforced with the help of Prettier
* Use ES6 arrow functions
* Component names upppercase
* Component file names uppercase
* React-Bootstrap imports should be from the global react-bootstrap namespace
  * DO: `import { Button, Col, Row } from 'react-bootstrap'`
  * DON'T: `import Button from 'react-bootstrap/button'`
* Try to use standard bootstrap styles as much as possible
* For global css use the provided default.css
* For component specific styles use styled-components or css modules
* For API calls use the store (TBD)
* Don't use unnecesary handler functions when binding something to e.g. a button
  * DO: `<Button onClick={() => doSomething()} />`
  * DON'T: `<Button onClick={doSomethingHandler()} />` and have another function that just calls `doSomething()`
* Don't use `<React.Fragment>`, just use `<>` and `</>`