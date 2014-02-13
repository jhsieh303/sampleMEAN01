//nodeJs///////////////

/*
 Start Your App!
 Now that we have our package.json and server.js started up, we can start up our server and see what’s going on.
 Just go into your console and use the following command:
 node server.js
 Now you have a server listening on port 8080. You can’t see anything in your browser at http://localhost:8080yet since
  we didn’t configure our application to output anything. But it’s a start!
 Automatically restart server when files change: By default, node will not monitor for file changes after your server
 has been started. This means you’d have to shut down and start the server every time you made a file change. This can
  be fixed with nodemon. To use: install nodemon globally npm install -g nodemon. Start your server with nodemon server
  .js now. Smooth sailing from there.
 */




// set up ======================================================================
var express  = require('express');                      //import express
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodbLIB
var port  	 = process.env.PORT || 8080; 				// set the port to listen
var database = require('./config/database'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on mongoHQ


app.configure(function() {
	app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});



// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);




/*
 //=======================================================================================//
 Development Setup for 2.0  Windows  (see also dropBox for lastest)
 //=======================================================================================//

 Recommended things to have:

 1) Text Editor (Sublime, Webstorm, etc.)

 Reg Key for Sublime:
 ----- BEGIN LICENSE -----
 CommercialTribe
 4 User License
 EA7E-889353
 1B3453F3 F020EB3F E1F10868 A1A61D5C
 AE4B04A5 B02FB780 FDAC7594 BB16DE81
 07E29EAC AAF330CB 1BA73729 06A8120A
 DC0C1C54 F1837C12 C73A9C33 A399C932
 4E350BBA D6103C8B C747C453 ACF3168B
 8608A124 27A965D0 6429FCF0 9578E2F4
 840C49CE A1BA3F92 12468584 A0138EED
 0E959D59 9C3812BC 69D7AC65 C90D8E47
 ------ END LICENSE ------

 Reg Key for Webstorm:
 user: CommercialTribe
 ===== LICENSE BEGIN =====
 619911-10122013
 000022LO8GzKW131xg3b4EdGaIEEqx
 pWKjP7OjDWkwhSus"oJxnC!y8BL"TQ
 HEiqEXjU0MuWfEhfI5fm3prixlf32!
 ===== LICENSE END =====

 2) GUI for Version Control through GitHub (Source Tree)
 If you have not used GIT, here is a link for primer: http://dotnet.dzone.com/articles/intro-git



 Process:

 1) Install Nginx server at nginx.org. (v1.5.10 at date: 02.04.2014)


 2) Install Node.js at nodejs.org.


 3) Get access to CT's GitHub and pull the 2.0-Prototype repository to your computer.


 4) Once the repository is on your computer, navigate to the folder where nginx is located.
 In nginx/conf open nginx.conf (CONF file) and scroll down to server configurations within
 http.  Reconfigure the server to listen on a different port.  I believe
 the default is 80 and this conflicts with Skype.  I use 8000 or 8080 and have no problems.
 Next change the location root to the file path where 2.0-Prototype\website is located and
 make sure the index is set to index.html.  E.g.

 location / {
 root: "C:\Users\Nikolas\Desktop\2.0\2.0-Prototype\website";
 index index.html index.htm;
 }



 5) To run the app:
 a) Open a command prompt window and navigate to your nginx folder and run the nginx
 server by typing 'nginx' on the command line.


 b) Open another command prompt window and navigate to ~\2.0-Prototype\api and run the
 node server by typing 'node app.js' on the command line.



 (if nodemon was installed then >nodemon app.js)

 EX:
 ///////////app.js
 var express = require('express');
 var mongoose = require('mongoose');
 var routes = require('./routes');




var api = require('./routes/api');
var http = require('http');
var path = require('path');

var config = require('./config')();
var security = require('./libs/security');
var session = require('./libs/session');
 var scenario = require('./routes/scenario');

var app = express();

// all environments
app.set('port', process.env.PORT || config.port);
app.use(express.logger(....


6) Finally, within your web browser go to localhost:<port> where <port> is the port number
that the nginx http server is listening.  Voila!

Note:
Anytime one changes anything with the API, you would need to restart node.


*/



