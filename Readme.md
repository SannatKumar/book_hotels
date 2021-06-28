# Description

This is a node backend api for booking meeting rooms from different venues.

# How it works?

Environment: 

node and npm needs to be installed in the machine.

Download the application folder. Go to the folder where the package.json file is located. Package.json file has all the dependencies and scripts necessary for the project.

In this folder insert the following command.

**Note: Actual command starts after the dollar sign.**

$ npm install

This installs the necessary dependencies for the project.

Next,

To load the dummy Data, Insert the following command in the terminal(same folder where package.json resides).

$ node ./dump/venue.dbdata.js

Next,

Open a terminal and insert the command.

$ mongod

This starts the database server.
Keep this running and open another terminal and insert the folowing command.

$npm start

This starts the application and Now we can try testing the api with Postman.

"venue_api.postman_collection" is the collection of request used to test the design APIs. 

There are 11 APIs and 10 of them are to create(Post Method) and retrieve(Get Method) the data into the collections.

Below are the list of 10 APIs are mainly for the development purposes.

1) POST localhost:4000/api/create-venue
To post venue names.

2) GET localhost:4000/api/show-venue
To get the list of venue in the database.

3) POST localhost:4000/api/create-meeting-room
To post meeting rooms.

4) GET localhost:4000/api/show-meeting-room
To view the list of meeting rooms.

5) POST localhost:4000/api/create-website
To create the website list.

6) GET localhost:4000/api/show-website-data
To show the website list from the database.

7) POST localhost:4000/api/create-venue-website
To create the venue & website. linking visibility between venue and website.

8) GET localhost:4000/api/show-venue-website-data
To show the venue & website. linking visibility between venue and website.

9) POST localhost:4000/api/create-booking-data
To create the booking data.

10) GET localhost:4000/api/show-booking-data
To View the booking data. This shows all the details along with visibility and price rates.

Next,
This is the main API for the task.

Task API: GET 
localhost:4000/api/website/:id

The id is replaced by the id of the website just like below.

localhost:4000/api/website/60d864804f947b43ec223b17

It shows the data related to the website and hourly price rate.

# Note dbDescription.md has the database explanation.



# Process of development

Initialize the project and package.json file with the folllowing command below.
$ npm init

Install all the dependencies
$ npm install mongoose express cors body-parser

$ npm insatll http_errors --save

After Installiing all the necessary dependencies, create a database folder and db.js inside the folder to store the database configuration.

Create a models folder and venuedb.js file inside the folder for the application use such as bookingdb in this case.

In this venuedb.js file, we declare the necessary schema for our application.

Create a routes folder and venue.route.js inside the folder to store the api routes for accessing and manipulating the mongodb database of our application.

Finally, we create a index.js file whicih holds the configuration of the server.

This is the main entry point of our backend application and we use dbconfiguartion, middlewares, and define the ports and error.  

The develop api has been tested with Postman.



The following is a backend application developed in Node js environment. Node is a javascript runtime environment that allows us to write javascript on the server side.

# Tools Used:

Node: It’s a JavaScript runtime environment built on Google Chrome’s V8 engine, and it compiles js at the runtime.

MongoDB: A document-oriented database programme based on NoSQL.The locally installed mongodb database  is used to storing, processing and retrieving of the data.

Mongoose: Mongoose is an open-source Node.js package that provides object modeling and structure to application data being saved to MongoDB. Mongoose allows developers to incorporate schema, models, and validation into their applications.

Express: Express is a robust, minimal and flexible Node.js web application framework that provides a robust set of features in creating powerful REST APIs for web and mobile applications.

CORS: Cross-Origin resource sharing(CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource was primarily served.

Nodemon(Used for hot reloading in smple words.): Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Http-errors: HTTP-errors module is used for generating errors for Node.js applications.

bodyParser: This package extracts the entire body portion of an incoming request stream and exposes it on req.body.

# Testing of APIs

Postman: Postman is an API client that makes it easy for developers to create, share, test and document APIs.


