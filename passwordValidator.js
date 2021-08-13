const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Welcome to the Password Validator Tool!`)

rl.question(`Please Enter Your Password: `, (answer) => {
    if(answer.length >=  10){
        console.log(`that password will suffice`)
    } else {
        console.log(`That password sucks, try again.`)
    }

    rl.close();


});
