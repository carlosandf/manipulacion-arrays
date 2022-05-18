const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

const rta = elements.join('--');
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = 
  title
    .split(' ')
    .join('-')
    .toLowerCase();
    
console.log(urlFinal);
