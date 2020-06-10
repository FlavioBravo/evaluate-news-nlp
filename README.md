# evaluate-news-nlp

Fourth project of my nanodegree. This project was build with Webpack, Sass, Service workers, an external API, express and node.js.

## Getting started

Clone my project and after you will need to install everything:

cd into your new folder and run:

`npm install`

## Setting up the API

You need credencial of the Aylien API to validade your requests. [Aylien Oficial Page] https://developer.aylien.com/signup

## Environment Variables

Next we need to declare our API keys, which will look something like this:

`var textapi = new aylien({ application_id: "your-api-id", application_key: "your-key" });`

Use NPM to run the project in Dev mode with the command `npm run build-dev`, or in production mode with `npm run build-prod`.
