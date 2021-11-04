// for off
const names = ["mahabub", "yamin", "nurul", "ibrahim"];
for (let name of names) {
  console.log(name);
  // upoer element gual ak ta ak ta kore name ar modde cole asbe
}

// for in
// object ke itaceret korar jonno for in babohar kora hoy

let student = {
  id: 101,
  name: "mahabub alam",
  gpa: 4.58,
};
for (let x in student) {
  console.log(x);
  // ai vave amara key gulo pacci
  // value gulo pete hole
  console.log(student[x]);
}
