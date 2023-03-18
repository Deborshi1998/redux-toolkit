# Redux Toolkit Demo App
This is a demo React application that shows how to use Redux Toolkit for state management. It's a simple app that has 3 nested UI components, data in Grandparent and Parent component are changed by the input of child component.

## Prerequisites
Before you get started, make sure you have the following installed:

1. Node.js
2. NPM or Yarn
## Installation
**Clone this repository to your local machine:**

`git clone https://github.com/your-username/redux-toolkit-demo.git`


**Navigate to the project directory:**
`cd redux-toolkit-demo`


**Install the dependencies:**

`npm install`
or
`yarn install`


## Usage

**Start the development server:**

`npm start`
or

`yarn start`

Open your browser and go to http://localhost:3000 to view the app.

## Implementation
This demo app uses the following technologies:

React.js
Redux Toolkit
The app consists of three components:

App: The top-level component that acts as the Grandparent, it has a text field which is referred from the central redux store.

Parent: It's the mid-level component, where the background colour style is referred from the central redux store. 

Child: It's the bottom-most component, it has 2 input fields, these inputs are send to central store, where the reducers edit the State with these inputs.

The Redux store is configured in src/store.js, which uses the configureStore function from Redux Toolkit to create a store with a pre-configured set of middleware and reducer logic.

**For more details on how redux works and how to implement Redux-toolkit follow this article.**

[May the State Be with You](https://debarshiraj.hashnode.dev/may-the-state-be-with-you-a-journey-to-simplify-state-management-in-react-using-redux-toolkit "A simple guide on how to implement Redux-Toolkit in a React App.").

## Contributing
If you find a bug or want to contribute to the project, please feel free to submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.





