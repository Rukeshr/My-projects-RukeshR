//JavaScript function that reverse a number

function Reverse(num){
    console.log(num.toString().split("").reverse().join(''));  //Convert number to string by toString method and split by quotes and reverse it and join it quotes.
}
Reverse(1234);

//JavaScript function that returns a passed string with letters in alphabetical order

const order = (str) => {
    console.log(str.toLowerCase().split('').sort().join('')); //convert to lowercase(captial letter wont sort in mixed case) and split sort it and join. 
}
order('Rukesh')
