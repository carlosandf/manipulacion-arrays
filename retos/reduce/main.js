const list = [1,2,3,4,5,6,7,8,9,10];

const result = list.reduce((obj, item) => {
  if (item <= 5) obj["1-5"]++;
  else if (item >= 6 && item <= 8) obj["6-8"]++;
  else obj["9-11"]++;
  return obj;
}, {
  "1-5": 0,
  "6-8": 0,
  "9-11": 0
})
