const print = console.log;
const chalk = require("chalk");
const figlet = require("figlet")
var options = {
    font: 'Bloody',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}

print(chalk.green("green"))
print(chalk.blue("blue"))
print(chalk.cyan("cyan"))
print(chalk.red("red"))

print(chalk.cyanBright(figlet.textSync("red",options)))