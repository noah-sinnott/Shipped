Shipped

Shipped is a web app that helps people track packages from any provider they want.


## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [maps api key](https://developers.google.com/maps)
* [tracktry api key](https://www.tracktry.com/pricing)

### Environment Variables

To run the project, you need to set up environment variables. 

For the **shipped-app**, you will need to create a file in `Project_Folder\shipped-app\src\app\environment\environment.env` with the following variables:
```
const enviroment = {
  port: '', // server port
  apiKey: '' // your google maps api key
};
module.exports = {enviroment}
```
For the **server**, you will need to create a file in `Project_Folder\server\environment\environment.env` with the following variables:
```
const enviroment = {
  'port': '', // server port
  'db': '', // mongodb database
  'apiKey': '' // tracktry api key
};

module.exports = {enviroment}
```


### Running the App

Once you have the environment variables set up, you can run the app with the following commands: 

* For the server: `npm run dev`
* For the client: `npm start` from inside the shipped-app directory

## Usage

Once the application is up and running, you can start tracking your own shippments. currently the app only supports 5 shipping companies but there are plans to increase the amount in the future

## Tech Stack

* [angular](https://reactjs.org/)
* [Express](https://angular.io/)

## Contributing

To contribute to Shipped, please submit a pull request.
