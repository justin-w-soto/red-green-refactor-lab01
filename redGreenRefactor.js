import fetch from 'node-fetch';

// create a function that returns the name property of an object.

export function getName({ name }) {
  return name;
}

// create a function that returns a new array with all the items in the original array and a new item pushed to the end.

export function copyAndPush(array, numbers) {
  return [...array, numbers];
}

// create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f.

export function capitalizeAndFilter(stringArray) {
  return stringArray.filter(item => item[0] !== 'f' && item[0] !== 'F').map(item => item.toUpperCase());
  
} 


// Use the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote 

export async function fetchQuotes() {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const apiQuote = await response.json();
  return { name: apiQuote[0].character, text: apiQuote[0].quote, image: apiQuote[0].image };
}
    
