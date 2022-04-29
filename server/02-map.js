const letters = ['a','b','c','d'];

const newArray = [];
for (let i = 0; i < letters.length; i++) {
  const elem = letters[i];
  newArray.push(elem + '++');
}
console.log('original', letters);
console.log('new with For', newArray);

const newLetters = letters.map(elem => elem+'++');
console.log('new with Map', newLetters)
