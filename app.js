const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");
const Employee = require("./lib/Employee");
const { get } = require("http");
const { ADDRGETNETWORKPARAMS } = require("dns");
const { type } = require("os");
const { PassThrough } = require("stream");

const team = [];

addTeam();

function addTeam() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "What position do you want to add?",
        choices: ["Manager",
            "Engineer",
            "Intern",
            "No more to enter"]
    })

        .then(function (answer) {
            switch (answer.menu) {

                case "Manager":
                    getManager();
                    break;
                case "Engineer":
                    getEngineer();
                    break;
                case "Intern":
                    getIntern();
                    break;
                case "No more to enter":
                    renderEmployees();
                    break;
            }
        });
    };
                    function getManager() {
                        inquirer
                            .prompt([

                                {
                                    type: "input",
                                    name: "role",
                                    message: "What is the this position's role?",
                                    default: "manager",
                                },
                                {
                                    type: "input",
                                    name: "name",
                                    message: "What is the manager's name?",
                                },
                                {
                                    type: "number",
                                    name: "id",
                                    message: "What is the manager's Id?",
                                },
                                {
                                    type: "input",
                                    name: "email",
                                    message: "What is the manager's email?",
                                },
                                {
                                    type: "number",
                                    name: "officeNumber",
                                    message: "What is the manager's office number?",
                                }

                            ]).then((answers) => {
                                const newManager = new Manager(answers.role, answers.name, answers.id, answers.email, answers.officeNumber)
                                team.push(newManager);
                                
                                addTeam()
                                })};

function getEngineer() {
                        inquirer
                            .prompt([

                                {
                                    type: "input",
                                    name: "engineerName",
                                    message: "What is the engineer's name?",
                                },
                                {
                                    type: "input",
                                    name: "engineerEmail",
                                    message: "What is the engineer's email?",
                                },
                                {
                                    type: "number",
                                    name: "engineerId",
                                    message: "What is the engineer's Id?",
                                },
                                {
                                    type: "input",
                                    name: "engineerGithub",
                                    message: "What is the engineer's GitHub?",
                                },
                            ])
                            .then((answer) => {
                                const newEngineer = new Engineer(answer.role, answer.engineerName, answer.engineerEmail, answer.engineerId, answer.engineerGithub);
                                team.push(newEngineer);
                                addTeam()
                            })};
 
                function getIntern() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "internName",
                                message: "What is the intern's name?",
                            },
                            {
                                type: "input",
                                name: "internEmail",
                                message: "What is the intern's email?",
                            },
                            {
                                type: "number",
                                name: "internId",
                                message: "What is the intern's Id?",
                            },
                            {
                                type: "input",
                                name: "internSchool",
                                message: "What is the intern's school?",
                            }]
                        )
                        .then((answer) => {
                            const newIntern = new Intern(answer.role, answer.internName, answer.internId, answer.internEmail, answer.internSchool);
                            team.push(newIntern);
                            addTeam()
                        })};
                            
                                           
                               
                                function renderEmployees() {
                                    let html = render(team)
                                    fs.writeFile(outputPath, html, (err) => {
                                        if (err) throw err;
                                    })}
