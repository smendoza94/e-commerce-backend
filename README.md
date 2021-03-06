# e-commerce-backend
The back end for an e-commerce site, taking a working Express.js API and configured it to use Sequelize to interact with a MySQL database.

Demo: https://drive.google.com/file/d/1ncyHROsv5WAczsuOiq0uJJb4n4Ywm8Yo/view

## Use Case
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies.

## Acceptance Criteria
- [x] WHEN I add my database name, MySQL username, and MySQL password to an environment variable file THEN I am able to connect to a database using Sequelize
- [x] WHEN I enter schema and seed commands THEN a development database is created and is seeded with test data
- [x] WHEN I enter the command to invoke the application THEN my server is started and the Sequelize models are synced to the MySQL database
- [x] WHEN I open API GET routes in Insomnia for categories, products, or tags THEN the data for each of these routes is displayed in a formatted JSON
- [x]  WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete data in my database

## Uses
Use "Insomnia" or "Postman" to call, add, or delete from the API. 

![example of api use](./assets/img/13-orm-homework-demo-02.gif)
