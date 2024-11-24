# Quote API
The Quote API allows users to retrieve quotes either randomly or based on a specified tag. This API is designed for simplicity and flexibility, making it suitable for applications requiring inspirational quotes.

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

### Features
Retrieve All Quotes: Fetch all available quotes.

Filter by Tag: Retrieve a random quote based on a specified tag.

Cross-Origin Resource Sharing (CORS): Allows access from different origins.

Request Logging: Logs all incoming requests using morgan.

Error Handling: Validates queries and provides meaningful error responses.

Prerequisites
Node.js (v12 or later)
npm (v6 or later)

## Installation

Instructions for setting up the API.


git clone https://github.com/shirosensei/quote_api.git
cd quote_api

npm install

### Start the server:

node index.js

The API will be available at http://localhost:3500.

### Endpoints

1. Get All Quotes
URL: /api/quotes
Method: GET
Description: Retrieves all quotes from the database.

2. Get Random Quote by Tag
URL: /api/quotes?tag=<tag>
Method: GET
Description: Retrieves a random quote filtered by the specified tag.
Example: /api/quotes?tag=kindness

