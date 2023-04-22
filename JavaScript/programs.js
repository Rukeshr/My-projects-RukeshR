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

//JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
const vowel = (str) => {
    console.log(str.match(/[aeiou]/gi).length);
}

vowel("my name is Rukesh")

    // Another function 

    function vowels(str) {
        const vl = 'aeiouAEIOU'
        let count = 0;

        for (let x = 0; x < str.length; x++) {
            if (vl.indexOf(str[x]) !== -1) {
                count += 1;
            }
        }
        console.log(count);
    }

    (vowels("My name is rukesh"))
