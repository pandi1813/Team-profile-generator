const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
// const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];



let newTeamMember;

startProgram()
async function startProgram(){

    // team.push(new Manager("Bob", 1, "test@test.com", 223))
    let {managerName, managerId, managerEmail, officeNumber, newEmployee} = await inquirer
    .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Enter team manager's name",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Enter team manager's ID number",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter team manager's email address",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter team manager's office number",
      },
      {
        type: 'list',
        name: 'newEmployee',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
      },

    ])
  
    if (newEmployee === "Add an Engineer") {
      console.log("adding engineer")
      let {engineerName, engineerId, engineerEmail, engineerGithub} = await inquirer
      .prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "Enter engineer's name",
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "Enter engineer's ID number",
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "Enter engineer's email address",
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "Enter engineer's Github username",
        }
      ])
    }else if(newEmployee === "Add an Intern"){
      console.log("adding intern")
      let {internName, internId, internEmail, internSchool} = await inquirer
      .prompt([
        {
        type: 'input',
        name: 'internName',
        message: "Enter intern's name",
        },
        {
          type: 'input',
          name: 'internId',
          message: "Enter intern's ID number",
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "Enter intern's email address",
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "Enter intern's school",
        }
      ])
    }

    // await addTeamMember()
    // .then();
    
    let htmlDoc = render(team)
    
    
    let writeHTML = fs.writeFile(outputPath, htmlDoc, (err) => console.log("File created"));
    
    
    
    
  }
  
  // function addTeamMember() {
  //   newTeamMember = inquirer.prompt([
  //     {
  //       type: 'list',
  //       name: 'newTeamMember',
  //       choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
  //     },
  //   ])
    
    
  //   if (newTeamMember === "add an engineer") {
  //     console.log("new engineer")
  //   }
    
    // return newTeamMember
    // console.log(newTeamMember)
  // }