let view = require("./commands/view");
let monitor = require("./commands/monitor");
let treefy = require("./commands/treefy");
let untreefy = require("./commands/untreefy");
let help = require("./commands/help");

let input = process.argv;
//get command
let cmd = input[2];

//command decision
switch(cmd){
    case "view":
        // console.log("view-command");
        view(input[3],input[4]);
        break;
    case "treefy":
        console.log("treefy-command");
        break;
    case "untreefy":
        console.log("untreefy-command");
        break;
    case "monitor":
        console.log("monitor-command");
        break;
    case "help":
        console.log("help-command");
        break;
}