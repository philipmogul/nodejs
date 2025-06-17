console.log('CONTROL STATEMENTS IN JS:');

const age = 31;

// IF STATEMENTS 
if( age < 32 ){ console.log('Minimal life experience!'); }
else if( age === 31 ){ console.log('Approaching my prime!'); }
else{ console.log('A lot of life experience!'); }

// LOOPS 
for( let i = 0; i <= 4; i++ )
{
    console.log("i = " + i);
}

// LOOPING ARRAYS 
const myArr = ['One','Two','Three','Four'];
for( let ar = 0; ar < myArr.length; ar++ )
{
    console.log("Array " + ar + " " + myArr[ar]);
}

// FOR OF LOOP 
for( let message of myArr )
{
    console.log(message);
}

// FOR IN LOOP 
// Loops through js objects 
const myObj = {'Name': 'Philip Mumo','Age': 31, 'Cool': true};
for( let detail in myObj )
{
    console.log(detail + " = " + myObj[detail]);
}

// FOREACH LOOP 
// Loop through array example 
myArr.forEach(x => console.log(x));
