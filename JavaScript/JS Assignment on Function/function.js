function namedFunction(a){
    console.log((22/7)*(a*a));  
}
namedFunction(15);

console.log('--------------------------------');

var funcExp = function (a,b){
 console.log((a*a)+(b*b)+(2*a*b))
}
funcExp(2,1);

console.log('--------------------------------');

(function(a,b) {
    if(a>=b){
      console.log(true);
      
    }else{
       console.log(false);
    } 
})
(10,20);

console.log('--------------------------------');

var arrowFunc = (name,designation) =>{
    console.log(`My name is ${name}`);
    console.log(`Iam a ${designation}`); 
}
arrowFunc('Rukesh R','Web developer');

console.log('--------------------------------');

function evenOdd(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(evenOdd(7));