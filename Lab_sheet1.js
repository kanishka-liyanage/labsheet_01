const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"]
};

console.log(student.name);
console.log(student.faculty);

student.year = 2025;

student.age = 22;

student.subjects.forEach(sub => console.log(sub));
const students = [
  {name: "Kavindu", age: 21, faculty: "Computing"},
  {name: "Nimesha", age: 22, faculty: "Engineering"},
  {name: "Dinuka", age: 23, faculty: "Business"}
];

students.forEach(s => console.log(s.name));

const older = students.filter(s => s.age > 21);
console.log("Older than 21:", older);

const faculties = students.map(s => s.faculty);
console.log("Faculties:", faculties);
const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    {name: "Kavindu", age: 21},
    {name: "Nimesha", age: 22},
    {name: "Dinuka", age: 23}
  ]
};

console.log(classroom.teacher);

classroom.students.push({name: "Sahan", age: 20});

classroom.students.forEach(s => console.log(s.name));

const products = [
  {name: "Keyboard", price: 2500, qty: 2},
  {name: "Mouse", price: 1500, qty: 3},
  {name: "Monitor", price: 22000, qty: 1}
];


const totalValue = products.reduce((total, item) => {
  return total + (item.price * item.qty);
}, 0);

console.log("Total value of products:", totalValue);


