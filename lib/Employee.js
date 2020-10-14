// TODO: Write code to define and export the Employee class
//Parent class
//  * name
//   * id
//   * email
//   * getName()    
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name();
    }
    getId() {
        return this.id();
    }
    getEmail() {
        return this.email();
    }
    
    getRole() {
        return "Employee";
    }
}

module.exports = Employee; 



// // * github  // GitHub username
// // * getGithub()
// // * getRole() // Overridden to return 'Engineer'

// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         super(name, id, email)
//         this.github = github;
//     }

// }

// // * officeNumber

// // * getRole() // Overridden to return 'Manager'

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super(name, id, email)
//         this.officeNumber = officeNumber;
//     }
// }

// // * school 

// // * getSchool()

// // * getRole() // Overridden to return 'Intern'

// class Intern extends Employee {
//     constructor(name, id, email, school) {
//         super(name, id, email)
//         this.school = school;
//     }
// }

// export default {Employee, Engineer}