import inquirer from "inquirer";
console.log('* WORD COUNTER *');
let input = await inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text to count the words: ',
    }
]);
const words = input.text.trim().split(' ');
console.log(words);
console.log(`The text has ${words.length} words.`);
