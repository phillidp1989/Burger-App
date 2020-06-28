# Burger-App

## Table of Contents:

[Description](#description)

[Visuals](#visuals)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Testing](#testing)

[Languages](#languages)

[Author](#author)

## Description:
A burger logging app built with MySQL, Node, Express, Handlebars and a homemade ORM. The project follws the MVC design pattern, using Node and MySQL to query and route data to the app and Handlebars to generate the HTML.

## Visuals:
![screenshot](https://github.com/phillidp1989/Burger-App/blob/master/public/assets/img/demo.gif)

## Installation:
Clone folder onto your own computer by forking the repository on Github. Install all required npm modules by running the command 'npm install' in the terinal of your root directory. Create your MySQL database in an SQL GUI by running the code in the schema.sql file (db folder) and pre-seeding data into this table using the code in the seed.sql file. Update your connection credentials in the connection.js file located within the config folder. Run the local server by running 'node server.js' in the command line of the root directory.

## Usage:
Once the page has loaded, if there are burgers already seeded in the database, these will be displayed in either the uneaten or eaten lists through a get request. Users can then add new burgers to the database by typing a new burger name into the text area field and clicking the submit button. The post request will then store the new burger in the database and the page will render the new burger in the uneaten list. Users can then click the 'Devour' button to move a specific burger to the right hand column. This action makes a put request, changing the record in the database to reflect that the burger has been eaten. An if/unless statement is used in the handlebars file to render the burger in the correct list. Users can also delete a burger from the app (and from the db) by clicking the delete button which renders once the burger has been 'eaten'.

## License:
<img src="https://img.shields.io/github/license/phillidp1989/Burger-App?logoColor=%23C2CAE8">

## Contributing:
No contributions

## Testing:
No testing framework used on this project

## Languages:
<img src="https://img.shields.io/github/languages/top/phillidp1989/Burger-App">

## Author:
Name: Dan Phillips

Github Username: phillidp1989

Github Email Address: d.p.phillips@bham.ac.uk

<img src="https://avatars1.githubusercontent.com/u/61989740?v=4">