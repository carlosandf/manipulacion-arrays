const items = [1,3,2,3,3,1,10];

const rta = items.reduce((obj, item) => {
  (!obj[item])
    ? obj[item] = 1
    : obj[item] += 1;
    
  return obj
}, {});
console.log(rta)

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
  (!obj[item])
    ? obj[item] = 1
    : obj[item] += 1;
  return obj;
}, {});
console.table(rta2)
