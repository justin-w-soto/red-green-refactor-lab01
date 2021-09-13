// create a function that returns the name property of an object.

const spot = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

getName(spot); //returns spot
getName(character); // returns Aang

export function getName({ name }) {
  return name;
}


// create a function that returns a new array with all the items in the original array and a new item pushed to the end.

const numbers = [1, 2, 3];

export function copyAndPush(numbers, 4) {
 return [1, 2, 3, 4];

// create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f.
// capitalizeAndFilter();

// Use the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote with the format:
// fetchQuotes();
