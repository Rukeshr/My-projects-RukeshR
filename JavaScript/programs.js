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

//JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function uppercase(str) 
{ 
 var array1 = str.split(' '); 
 var newarray1 = []; 
 
 for(var x = 0; x < array1.length; x++){ 
 newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))

 } 
 return newarray1.join(' '); 
} 
document.write(uppercase("my name is Rukesh")); 

//JavaScript program to get the current date.

 var today = new Date(); 
 var dd = today.getDate(); 
 
 var mm = today.getMonth()+1; 
 var yyyy = today.getFullYear(); 
 if(dd<10) 
 { 
 dd='0'+dd; 
} 

if(mm<10) 
{ 
mm='0'+mm; 
} 
today = mm+'-'+dd+'-'+yyyy; 
document.write(today); 
today = mm+'/'+dd+'/'+yyyy; 
document.write(today); 
today = dd+'-'+mm+'-'+yyyy; 
document.write(today); 
today = dd+'/'+mm+'/'+yyyy;
document.write(today); 

// JavaScript program to calculate number of days left until next Christmas.

today=new Date(); 
var cmas=new Date(today.getFullYear(), 11, 25); 
if (today.getMonth()==11 && today.getDate()>25) 
{ 
cmas.setFullYear(cmas.getFullYear()+1); 
} 
var one_day=1000*60*60*24; 
document.write(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+ 
" days left until Christmas!");

// JavaScript function to clone an array

array_Clone = function(arra1) { 
return arra1.slice(0); 
}; 
document.write(array_Clone([1, 2, 4, 0])); 
document.write(array_Clone([1, 2, [4, 0]]));

