const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    Name: String,
    Salary: Number,
    Language: String,
    City: String,
    isManager: Boolean
})

const Employee = mongoose.model('Employee', employeeSchema)

// export default Employee
module.exports = Employee