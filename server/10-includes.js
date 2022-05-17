const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === 'cat') {
    includeInArray = true;
    break;
  }
}
console.log('for', includeInArray);


const rta = pets.includes('bat');
console.log('includes', rta);
