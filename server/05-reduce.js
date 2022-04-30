const totals = [1,2,3,4];

let sum = 0;
for (i = 0; i < totals.length; i++) {
  const num = totals[i];
  sum += num;
}
console.log(sum);

const rta = totals.reduce((sum, num) => sum + num, 0)
console.log('rta', rta);
