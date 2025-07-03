// Global objects
setTimeout(function(){
    console.log("Congratulations devi! you have been selected for this role. herewith we hava been enclosed your offer letter");
    },3000);
var time=0;
setInterval(function(){
    time+=3;
    console.log(time+ 'seconds hava passed');
},3000);

//For reference
console.log(__dirname);
console.log(__filename);

//Function Expressions
var demo=function(){
    console.log("Hello world");
}
demo();

function Kiruba(fun){
    fun();
}
Kiruba(demo);

//Modules & require()
module.exports.counter =function(arr){
    return 'there are' +arr.length+ 'vowels in the array';
}
// console.log(counter(['a','e','i','o','u']));
 module.exports.subs =function(x,y){
    return `The subtraction of 2 elements is ${x-y}`;
}

//Module Patterns
// module.exports.counter=counter;
// module.exports.subs=subs;

// module.exports={
//     counter:counter,
//     subs:subs
// };

// Event Module
var  dev = require('events');
var myEmitter =   new dev.EventEmitter();
myEmitter.on("someEvent",function(msg){
    console.log("Have a nice day!");
    console.log(msg);
});
myEmitter.emit("someEvent","The event was Emitted");

//New Keyword
function person(name){
    this.names=name;
}
var R= new person("Obalesh");
console.log(R.names);