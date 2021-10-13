# Thomson Reuters Project

## Sections

- [Description](#description)
- [Getting Started](#getting-started)
  - [Setting Up](#setting-up)
  - [Executing](#executing)
  - [Other Information](#other-information)
- [Authors](#authors)
- [Picture](#picture)

---

## Description

This NextJS web-app frontend and GraphQL backend is a proof-of-concept **(not production)** application made for Thomson Reuters.
The `thomson-reuters-nexjs` folder consists of the nextjs application which was designed to imitate the current TR AEM site.
the `thomson-reuters-graphql` folder consists of the local-hosted graphql server for the MongoDB database which is meant to immitate the TR Salesforce product database.

---

## Getting Started

### Setting Up

Before running either application, it is important to run `npm install` in both thomson-reuters-nextjs and thomson-reuters-graphql folders to ensure that the necessary dependencies are installed.

<br />

The graphql server requires a the following environment variables located in the main thomson-reuters-project repo folder as a .env file

- MONGO_USER
- MONGO_PASS
- MONGO_DATABASE_NAME
- MONGO_COLLECTION_NAME

<br />

### Executing

Both the backend and the frontend must be executed for the system to work properly.
<br />

To run the GraphQL server, you must use `npm start` within the `thomson-reuters-graphql` folder and it will open on localhost/3030
<br />

To run the NextJS application (inside the `thomson-reuters-nextjs` folder), you can use `npm run dev` which starts the application in developer mode (meaning all pages are server-side rendered) or must use `npm run build` to build the static pages, and then run `npm run start` to start the server in production mode. Both will open the application on localhost:3000

<br />

### Other Information

- The environmental variables are needed for the graphql server to connect to the MongoDB database, which requires the username and password.
- Since the MongoDB database was created on a personal account, the data cannot be accessed, however the data has been exported to a json file (`salesforceData.json` file within the thomson-reuters-graphql fodler) which can then be imported in your own MongoDB server or alternative.
- All other branches have been merged to master branch, and thus are not necessary to focus on. The `Build-App` branch was mentioned to be sued inside the documenation provided to thomson reuters, but the master can be used with identicle results.

---

## Authors

**Adel Pazoki Toroudi, Conor Lamont, Edmund Lin, Jugal Bilimoria, Matthew Murison**
<br />August 13th 2021

<br />Application was made for Thomson Reuters during a 2 month internship through the UWaterloo WE Accelerate Program

---
## Picture
![TR](https://user-images.githubusercontent.com/85805543/137048956-6174a853-df41-4985-a45f-aa3ff18b5fdd.png)

