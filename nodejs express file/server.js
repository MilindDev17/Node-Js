//first start nodemon server.js
//run on browse localhost:3000
//ctrl+shift+i
//handlebars is a html {{> }}
//who will repeated that is hbs means every time repeated

//hbs for template
//express for html pages
//render for dynamic webpages
//register partials 

const express = require('express');
const hbs = require('hbs'); //hbs used dynamic template
//browser icon run
//const fs = require('fs');

var app = express(); //turn result as express there is no expression or no argument 
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');  //app.set for dynamic template (key pair value)   go to views/about.hbs folder
 
//app.use is a middleware so inside of here we will providing the function off the express object we will making our owan 
//app.use(express.static(__dirname+'/public'));  //static takes absolute path  to the folder //its go down beacause app is is using step by step


//express middleware  its similar as app.get register handler 
//go to wxpress js 4x version
//its basically showing console what u click and where u go
//it showing an error depressiation beacuse of version problem  
//if using database next will create an error
//middle ware use step of app 
app.use((req,res,next) =>{
	//second step
	var now = new Date().toString();
	//inside console web and console both work And GET showing a http:// wher u go
	//date GET/about
	console.log(`${now}: ${req.method}: ${req.url}`);  //showing date in node server cmd console //now is date , method what the path, url where u inject
    //ignore line var log =`${now}: ${req.method}: ${req.url}`;
    //ignore line console.log(log);
    //ignore line fs.appendFile('server.log',log+'\n');
    

   // step1
   //next();    			//if its empty means its not connect to server means  its doesnot write any thing //its will activitycicle round and round on browser
   //its not coonecting to server its just file

	//write next() and fix it
	next();


}); 
/*
//mainteanance
app.use((req,res,next)=>{
	res.render('maintenance.hbs');
});
*/
app.use(express.static(__dirname+'/public'));  //static takes absolute path  to the folder 

//someone visit data like json file or data or may be html page
//register handler just app.get
//get have two argument('/url',function to run)
//req is used for header and body etc  / response is a bunch of method what data u semt back
app.get('/',(req,res) => {                //get is http get request
//	res.send('<h1>hello express !</h1>'); //creating static  web site <h></h>  //using html page
	//if i chancge json format
	/*res.send({  					//using json file
		name: 'Milind',
		likes:[
			'Biking',
			'Cities'
		]
	}); */
	res.render('home.hbs',{
		pageTitle:'Home page',
		welcomeMessage:'welcome to my website',
		CurrentYear:new Date().getFullYear()
	});
});

app.get('/about',(req,res) => {
	// replace on render ==> res.send('About Page');							//using multiple page with addressbar
	//res.render('about.hbs');              //render any of the template
	  res.render('about.hbs',{
	  	pageTitle:'About page',
	  	CurrentYear:new Date().getFullYear()   //about.hbs use
	  });
});

app.get('/bad',(req,res) => {
	res.send({
		errorMessage:'unable to fullfill requirment'
		})
});
//without listen doesnot work
//using local host which is 3000
//it depend on which server is used to deploy 
app.listen(3000);