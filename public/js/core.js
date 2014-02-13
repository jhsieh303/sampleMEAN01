
//inject into johnTodo
angular.module('johnTodo', ['todoController', 'todoService']);

/*
//weird js stuff from C#////////////////////////////////////



(function()
{
    console.log('hello');
})();



 function functionOne()
 {
 var hello = 'Hello from functionOne';

 functionTwo() // closure function (constructor function - in this case)
 {
 return { // returning an object with (like JSON)
 hello: function() // this property returns a function
 {
 return hello;
 },
 sayHello: 'Hello' // this property returns a string
 }
 }
 return functionTwo();
 }

 var instanceOfFunctionOne = functionOne();
 instanceOfFunctionOne.hello(); // 'Hello from functionOne'
 instanceOfFunctionOne.sayHello; // 'Hello





