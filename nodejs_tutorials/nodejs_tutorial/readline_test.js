const readline = require('readline');

//creating an interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let num1 = 5, num2 = 6;
let answer = num1 + num2;

//asking question = > reading input stream
rl.question(`what is  ${ num1 } +  ${ num2 }? \n`,
 (userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect Result\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer) rl.close();
            else {
                rl.setPrompt(`your answer ${ userInput } is Incorrect!\n`);
                rl.prompt();
            }
        });
    }
});

//registering an event on close call
rl.on('close', () => {
    console.log("awesome thats a correct answer");
});

