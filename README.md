# Quote API
The Quote API allows users to retrieve quotes either randomly or based on a specified tag. It supports CORS for cross-origin requests and provides detailed logging for requests and errors. This API is designed for simplicity and flexibility, making it suitable for applications requiring inspirational quotes.

### Features
Retrieve All Quotes: Fetch all available quotes.
Filter by Tag: Retrieve a random quote based on a specified tag.
Cross-Origin Resource Sharing (CORS): Allows access from different origins.
Request Logging: Logs all incoming requests using morgan.
Error Handling: Validates queries and provides meaningful error responses.
Installation
Prerequisites
Node.js (v12 or later)
npm (v6 or later)
Steps
Clone this repository:


Copy code
git clone https://github.com/shirosensei/quote_api.git
cd quote-api

### Install dependencies:

npm install

Start the server:

node app.js

The API will be available at http://localhost:3500.

Endpoints
1. Get All Quotes
URL: /api/quotes
Method: GET
Description: Retrieves all quotes from the database.

2. Get Random Quote by Tag
URL: /api/quotes?tag=<tag>
Method: GET
Description: Retrieves a random quote filtered by the specified tag.
Query Parameters:
tag (required): The tag to filter quotes.
Example: /api/quotes?tag=kindness
Response (if a matching quote is found)
