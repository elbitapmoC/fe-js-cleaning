const people = [
  { name: "Raul", age: 27 },
  { name: "Jose", age: 55 },
  { name: "Maria", age: 52 },
  { name: "Joshua", age: 18 },
  { name: "Neo", age: 2 }
];

// Regular
people.forEach(function(person){
  console.log(person.name + " is " + person.age + ' years old.');
})

// Cleaned Up Version
people.forEach(({name, age}) => {
  console.log(`${name} ${age} years old.`);
})