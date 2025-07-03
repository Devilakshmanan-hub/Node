var events =require('events');
var util =require('util');
var person = function (name){
    this.names=name;
}
util.inherits(person,events.EventEmitter);
var Sree = new person('shyamala');
var Cat=new  person('devi');
var Rat=new person('Kirubashini');
var Shark=new person('Venugopal');
var people = [ Sree,Cat,Rat,Shark ];
people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.names + ' said '  + msg);
    })
})
Sree.emit('speak' ,'Hello Everyone');
Cat.emit('speak' , 'Hello Everyone');
Rat.emit('speak', 'that she wants Teddy');
Shark.emit('speak','good morning everybody');