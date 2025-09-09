use("CrudDB")

console.log(db)

// db.createCollection("Courses");

// db.Courses.insertOne({
//     "Name": "Harry's Web Dev Free",
//     "Price": 0,
//     "Assignments": 12,
//     "Projects": 45
// })

// db.Courses.insertMany([
//     {
//         "Name": "Harry's Python Course",
//         "Price": 100,
//         "Assignments": 10,
//         "Projects": 3
//     },
//     {
//         "Name": "Angela's Data Science",
//         "Price": 200,
//         "Assignments": 14,
//         "Projects": 10
//     },
//     {
//         "Name": "CS Dojo's Operating System",
//         "Price": 300,
//         "Assignments": 15,
//         "Projects": 20
//     },
//     {
//         "Name": "Abdul Bari's DSA",
//         "Price": 400,
//         "Assignments": 16,
//         "Projects": 30
//     },
//     {
//         "Name":"Shankar IAS Academy",
//         "Price":500,
//         "Assignments":18,
//         "Projects":200
//     },
//     {
//         "Name":"Physics Wallah Gate",
//         "Price":600,
//         "Assignments":20,
//         "Projects":300
//     }
// ])

// let result = db.Courses.find({Price:200})
// console.log(result)

// console.log(result.count());
// console.log(result.toArray());

// Update
// Set Harry's Course Price to 100

// db.Courses.updateOne({Price:0},{$set:{Price:100}});

// db.Courses.updateMany({Price:0},{$set:{Price:1000}});

db.Courses.deleteOne({Price:100});
db.Courses.deleteMany({Price:1000});