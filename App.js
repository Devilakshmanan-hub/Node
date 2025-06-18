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