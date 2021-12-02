// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink} = require('./utils/generateMarkdown');

// Prompt the user
inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput){
            return true;
          } else {
            console.log('Please Enter Your Name!');
            return false;
          }
        }
       
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username? (Required)',
        validate: gitHubInput => {
          if (gitHubInput){
            return true;
          } else {
            console.log('Please Enter Your GitHub Username!');
            return false;
          }
        }
      
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address? (Required)',
        validate: emailAddress => {
          if (emailAddress){
            return true;
          } else {
            console.log('Please Enter Your Email Address!');
            return false;
          }
        }
        
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name? (Required)',
        validate: projectNameInput => {
          if (projectNameInput){
            return true;
          } else {
            console.log('Please Enter Your Projects Name!');
            return false;
          }
        }
      
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Description of your project? (Required)',
        validate: projectDescription => {
          if (projectDescription){
            return true;
          } else {
            console.log('Please Enter Your Projects Description!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'projectLicenses',
        message: 'What kind of license should your project have? (Required)',
        validate: projectLicenses => {
          if (projectLicenses){
            return true;
          } else {
            console.log('Please Enter Your Projects Licenses!');
            return false;
          }
        },
        choices: ["MIT", "Apache", "BSD", "None"]

      
      },
      {
        type: 'input',
        name: 'projectDependencies',
        message: 'What command should be run to install dependencies? (Required)',
        validate: projectDependencies => {
          if (projectDependencies){
            return true;
          } else {
            console.log('Please Enter Your Project Dependencies!');
            return false;
          }
        }
      
      },
      {
        type: 'input',
        name: 'projectTestCommands',
        message: 'What command should be used to run the tests (Required)',
        validate: projectTest => {
          if (projectTest){
            return true;
          } else {
            console.log('Please Enter Your Project Test Commands!');
            return false;
          }
        }

      
      },
      {
        type: 'input',
        name: 'projectAbout',
        message: 'What does the user need to know about using the repo? (Required)',
        validate: projectAbout => {
          if (projectAbout){
            return true;
          } else {
            console.log('Please Enter Your Project About Section!');
            return false;
          }
        }
      
      
      },
      {
        type: 'input',
        name: 'projectContribution',
        message: 'What does the user need to know about contributing to the repo? (Required)',
        validate: projectContribution => {
          if (projectContribution){
            return true;
          } else {
            console.log('Please Enter Your Project Contribution Requests!');
            return false;
          }
        }
      
      }

]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    // Bonus: Generate the name of your user file from their input
    let readmeContent = `
    
# ${data.projectName}

## Table of Contents

* [Description](#Description)
* [Dependencies](#Dependencies)
* [Testing](#Testing)
* [Contribution](#Contribution)
* [About](#About)
* [Licenses](#Licenses)


## Description 
${data.projectDescription}

## About 
${data.projectAbout}

    
## Dependencies 

${data.projectDependencies}

    
## Testing 
${data.projectTestCommands}

    
### Contribution 
${data.projectContribution}

### Licenses 

${renderLicenseBadge(data.projectLicenses)}

${renderLicenseLink(data.projectLicenses)}

    `

    fs.writeFile("README.md", readmeContent, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });



// TODO: Create an array of questions for user input
// const questions =  () => {
//     return inquirer.prompt
// };
// // TODO: Create a function to write README file
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('./README.md', fileContent, err => {
//         if (err) {
//           reject(err);
//           return;
//         }
  
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };
  

// TODO: Create a function to initialize app

// questions();
// Function call to initialize app
// init();
// }
// module.exports = {writeFile
