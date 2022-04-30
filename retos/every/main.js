const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];


const verify = (team) => {
  const verification = team.every(item => item.age <= 15);
  const response = 
    (verification)
    ? 'Puende pardticipar'
    : 'No cumplen con los requisitos'
    
  return response;
}

console.log(verify(team));
