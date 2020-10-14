// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// * officeNumber

// * getRole() // Overridden to return 'Manager'


const Employee = require('./Employee').default;

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficenumber() {
        return this.officeNumber;
    }
   
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;