# Description

This is a node backend for booking meeting rooms from different venues. 

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


