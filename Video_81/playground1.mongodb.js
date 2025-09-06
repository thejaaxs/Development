use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
    { "name": "Java", "price": 1000, "instructor": "Telusko" },
    { "name": "C#", "price": 2000, "instructor": "Sameer Saini" },
    { "name": "Python", "price": 1500, "instructor": "Angela Yu" },
    { "name": "JavaScript", "price": 1800, "instructor": "Brad Traversy" },
    { "name": "C++", "price": 2200, "instructor": "Abdul Bari" },
    { "name": "React.js", "price": 2500, "instructor": "Maximilian Schwarzmüller" },
    { "name": "Node.js", "price": 2100, "instructor": "Colt Steele" },
    { "name": "SQL", "price": 1200, "instructor": "Raghavendra Dixit" },
    { "name": "Data Structures", "price": 3000, "instructor": "Aditya Verma" },
    { "name": "Machine Learning", "price": 3500, "instructor": "Andrew Ng" }
]
);

console.log(`DataBase Content Inserted !`);