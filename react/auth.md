# React + Auth0

This is a step by step exercise to add auth0 to your
react app with react router v4

## Setup

```
cd relief-tracker
cd api
npm install dotenv express-jwt -S
```

```
cd ..
cd web
npm install auth0-lock -S
```

## Step 1

Secure your api

```
cd api
touch jwt-check.js
```

### Edit jwt-check.js

```
require('dotenv').config()
const jwt = require('express-jwt')

module.exports = jwt({
  secret: new Buffer(process.env.SECRET, 'base64'),
  audience: process.env.ID
})
```

## Step 2

Secure your client


## Step 3
