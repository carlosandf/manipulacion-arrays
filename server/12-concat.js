const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let i = 0; i < othersElements.length; i++) {
  const element = othersElements[i];
  newArray.push(element);
}
console.log('for', newArray);

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];
console.log('concat', rta);
console.log('...', rta2)
