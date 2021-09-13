import { getName } from './redGreenRefactor.js';

// test for getName function
describe('getName', () => {
  it('should return the name property of the spot object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expectedName = 'spot';
    const actualName = getName(spot);
    expect(actualName).toEqual(expectedName);
    
  });

  it('should return the name property of the character object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const expectedName = 'Aang';
    const actualName = getName(character);
    expect(actualName).toEqual(expectedName);
  
  });

  // test for copyAndPush function
  // describe('copyAndPush', () => {
  //   it('should return a new array with all the items in the original array and a new item pushed to the end.', () => {
  //     expect();
  //   });
  // });

  // test for capitalizeAndFilter function
  // describe('capitalizeAndFilter', () => {
  //   it('should take an array of strings capitalize all strings and filter out any string that starts with the letter F/f.', () => {
  //     expect();
  //   });
  // });

  // test for fetchQUotes function
  // describe('fetchQuotes', () => {
  //   it('should ', () => {
  //     expect();
  //   });
  // });

});
