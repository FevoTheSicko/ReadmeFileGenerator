// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
function generatelicense(response){
    if(response.License = "MIT"){
    licensebadge = 'https://img.shields.io/apm/l/vim-mode';
}else if(response.License= "APACHE 2.0"){
    licensebadge = "https://img.shields.io/crates/l/rustc-serialize";
}else
return
}

function generatereadme(response){
generatelicense(response)
    return `# ${response.Projectname} 
![License baadge](${licensebadge})
## Description
 ${response.description}
    
## table of contents
- [Installation Instructions](#Installation)
- [Usage Instructions](#Usage)
- [Contributing](#Contributing)
- [Test Instructions](#Test)
- [Installation Instructions](#Installation)
## Installation
${response.installation}
    
## Usage
${response.Usage}
     
    
## License
This Project is covered under the ${response.License} License
    
## Contributing
${response.Contributions}
    
## Tests
${response.test}
    
## Questions
### Github
${response.GithubUsername}   
### Email
${response.Useremail}
`
}



inquirer.prompt([
    {
        type: "input",
        name: "Projectname",
        message: "What is the name of your project",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the inscructions for installation"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage for this project",
    },
    {
        type: "input",
        name: "Contributions",
        message: "what are the contribution guidelines for your project",
    },
    {
       type: "input",
        name: "test",
        message: "what are the test instructions for your project",
    },
    {
        type: "checkbox",
        name: "License",
        message: "Which Licence do you want",
        choices: ["MIT","APACHE 2.0" ]
    },
    {
        type: "input",
        name: "GithubUsername",
        message: "What is your github username",
    },
    {
        type: "input",
        name: "Useremail",
        message: "What is your Email",
    },
])
.then((data)=>{
const fileformat = generatereadme(data);
const filename = "readme.md";

fs.writeFile(filename,fileformat,(err) =>
err ? console.log(err): console.log("success"))
});





