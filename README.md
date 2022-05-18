# Fetch Rewards Backend Engineering Apprenticeship Assessment

### Created using Node.js v16.15.0 and Express.js v4.18.1

### Additional packages:

#### Moment - For date formatting:

"moment": https://www.npmjs.com/package/moment
</br>

#### Nodemon - Automatically restarts server when chenges are detected. For use in development:

## in package.json at "scripts", change `"start": node index.js"` to `"start": "nodemon index.js"`

"nodemon": https://www.npmjs.com/package/nodemon
</br>

#### Jest and Supertest for testing

"jest": https://jestjs.io/

"supertest" https://www.npmjs.com/package/supertest

#### To start tests, open `__tests__` folder, then `test.js` In terminal, type `npm test` to run tests

### Tested endpoints using Insomnia at [https://insomnia.rest/](https://insomnia.rest/)

### Instructions to run code

#### In your terminal, check that you have node installed with the latest version by typing `node --version`

#### If node is not installed, follow the instructions at [https://nodejs.org/en/](https://nodejs.org/en/)

#### In your terminal, execute `npm install` to install dependencies

## To start the server, execute `npm start`

## Server running at http://localhost:5000

## API's and their outputs

### GET / server check to show that the server is up and running.

<img height="100%" width="100%" src="/assets/images/API_running.png"/>

### POST /addPoints - Post request with JSON body. Outputs JSON object with key value pairs; payer and points. Adds points with payer and timestamp.

## accessed at [http://localhost:5000/points/addPoints]

Sample JSON objects:

{
"payer": "DANNON",
"points": 300,
"time": "10/31/2020 10:00 AM"
}

{
"payer": "UNILEVER",
"points": 200,
"time": "10/31/2020 11:00 AM"
}

{
"payer": "DANNON",
"points": -200,
"time": "10/31/2020 3:00 PM"
}

{
"payer": "MILLER COORS",
"points": 10000,
"time": "11/1/2020 2:00 PM"
}

{
"payer": "DANNON",
"points": 1000,
"time": "11/2/2020 2:00 PM"
}

<img height="100%" width="100%" src="/assets/images/addPoints1.png"/>
<img height="100%" width="100%" src="/assets/images/addPoints2.png"/>
<img height="100%" width="100%" src="/assets/images/addPoints3.png"/>
<img height="100%" width="100%" src="/assets/images/addPoints4.png"/>
<img height="100%" width="100%" src="/assets/images/addPoints5.png"/>

### POST /deductPoints - Post request with JSON body. Outputs a JSON object with payer name and points deducted.

### Deducts points from payers with oldest points deducted first as long as there are available points to be deducted

## accessed at [http://localhost:5000/points/deductPoints]

Sample request body:

{
"points": 5000
}

<img height="100%" width="100%" src="/assets/images/deductPoints.png"/>

### GET /getPoints - check points balance

## accessed at [http://localhost:5000/points/getPoints]

<img height="100%" width="100%" src="/assets/images/getPointsBalance.png"/>
