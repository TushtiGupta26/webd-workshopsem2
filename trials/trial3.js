let student = {
    name: "Rahul",
    age: 21,
    course: "CSE"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}