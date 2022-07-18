const fs = require("fs")
const inquirer = require("inquirer");

const template = '';

// HTML template to input information from command line
const generateHTML = ({userName, userLocation, gitHubUsername, linkedInUsername}) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
    </head>
    <body>
        <header>
            <h1>Hi, my name is ${userName}</h1>
            <p>I live in ${userLocation}</p>
        </header>
        <main>
            <h3>Here is a little more about me:</h3>
            <p>${userBio}</p>
        </main>
        <footer>
            <a href="${gitHubUsername}">GitHub</a>
            <a href="${linkedInUsername}">LinkedIn</a>
        </footer>
    </body>
    </html>`
}

console.log("hello");

//prompt the user
const propmtUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: "What is the name for the portfolio?",
        },
        {
            type: 'input',
            message: 'Where are you?',
            name: 'userLocation',
        },
        {
            type: 'input',
            message: 'Give a brief bio here',
            name: 'userBio',
        },
        {
            type: 'type',
            message: 'What is your GitHub username?',
            name: 'gitHubUsername',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn username?',
            name: 'linkedInUsername',
        },
    ])
    .then((answers) => {
        //content is pulling HTML with answers populating it
        const content = generateHTML(answers)
       
        fs.writeFile('index.html', content, (err) => err ? console.log(err) : console.log('nice'))

    });
}

const init = () => {
    propmtUser()
    .then((answers => fs.writeFileSync(`index.html`, generateHTML(answers))))
    .then(() => console.log("nice"));
    .catch((err) => console.log(err))
}
// function to read the template
// function generateFile(answers) {
//     fs.writeFile(`index.html`, JSON.stringify(answers,null,4), (err) => {
//         if(err)
//             throw err;
//         fs.readFile(`index.html`, 'utf8', (err, answers))
        
//     })
//     fs.readFile('template.html', JSON.stringify(ans), (err, data) => {
 

//         // fs.writeFile("index.html", template, (err) => {
//         //     if (err)
//         //         console.error("yikes!");
//         //     console.log("Saved!");
//         })
//     }
