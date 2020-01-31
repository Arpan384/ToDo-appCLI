const chalk = require("chalk")
const figlet = require("figlet")

var options = {
    font: 'Bloody',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}

console.log(chalk.magentaBright(figlet.textSync("D i a r y",options)))

const readLine = require("readline");

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "=> "
})

const commands = ["add task_name","ls (to list all tasks)", "delete id (enter task id to delete it)"]

reader.prompt();

reader.on("line", function (data) {
    var cmd =  data.split(" ")[0];
    var task = data.split(" ").slice(1).join(" ");
    if(cmd=="help"){
        help();
    }
    else if(cmd=="add" && task.trim().length>0){
        add(task.trim());
    }
    else if(cmd=="ls"){
        ls();
    }
    else if(cmd=="delete" && task.trim().length>0){
        del(task.trim());
    }
    else{
        console.log(chalk.red("Command not found"))
    }
    reader.prompt();
})

function help() {
    console.log(chalk.yellow("Available Commands: "));
    for(let i =0; i<commands.length; i++){
        console.log((i+1)+". "+commands[i])
    }
    console.log();
    reader.prompt();
}

var tasks = [];

function add(data) {
    tasks.push(data)
    console.log(chalk.green(data+" added to tasks"));
    console.log();
    reader.prompt();
}

function ls() {
    console.log(chalk.yellow("Tasks: "));
    for(let i =0; i<tasks.length; i++){
        console.log((i+1)+". "+tasks[i])
    }
    console.log();
    reader.prompt();
}

function del(data){
    var idx = isNaN(parseInt(data))? tasks.length: Number(data)-1;
    if(idx>=tasks.length){
        console.log(chalk.bgRed("Task id Not Found"))
    }
    else{
        tasks = tasks.filter((e,index)=>index!=idx);
        console.log(chalk.bgRedBright("Task "+(data)+" deleted"))
    }
    reader.prompt();
}