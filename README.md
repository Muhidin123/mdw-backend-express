# mdw-api-backend-express

# To run and test locally

- Fork and clone this repository
- Create a new postgreSQL database
  - [Tutoral](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm)
- Inside root folder create .env file and following to it:

  - ```
    CONNECTION_STRING=postgresql+psycopg2://[:username]:[:password]@localhost/[:database_name]
    ```
    - Where respectfully change `:username` , `:password`, `:database_name` to the appropriate values of the database you created

- run `yarn install` to install dependencies
- run `yarn runQuery`
- run `yarn startdev`

- BASE URL (http://localhost:3000/mdw-api)

- GET `/content/{page} {page}` can be home or contact
  Will return an array of JSON objects containing a unique title and description for each section of the design.

- POST `/contacts` saves contact to database

  - Example payload:
    - ```json
      {
        "first_name": "First",
        "last_name": "Last",
        "title": "Title",
        "email": "some@email.com",
        "message": "Message content text"
      }
      ```

- If you do not feel like creating a new database and checking for your password and username feel free to use this link as a value for CONNECTION_STRING:
  - `CONNECTION_STRING=postgres://txacfydc:ELpS0t39keTVNuXvpeR56q6DufLJQ8wr@otto.db.elephantsql.com/txacfydc`
  - This is a link to a hosted db on elephantSQL and it is already seeded with data
  - IN THE CASE OF USING THIS LINK PLEASE IGNORE(skip) STEP `yarn runQuery`
