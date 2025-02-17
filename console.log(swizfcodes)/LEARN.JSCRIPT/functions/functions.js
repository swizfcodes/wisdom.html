
function greeting (){
    console.log('hello');
}
greeting();

const num = 3;
const function1 = function(){
    console.log('hello2');
};
console.log(function1);
function1();

const object = {
    num: 3,
    fun: function(){
        console.log('hello3');
    }
};
object.fun();

function display(pram){
    console.log(pram);
}
display(2);


// pasing  function into another function( callback function)
function run (param){
    param(); 
}
run(function(){
    console.log('hello4')
});

setTimeout(function(){
    console.log('timeout')
}, 3000)