//to check whether path is a directory or a file.

let fs = require("fs");
let path = require("path");
let srcpath = process.argv[2];

function viewTree(srcpath){
    let ans = fs.lstatSync(srcpath).isDirectory();

    let printHelper = "";

    if(ans == false){
        //get file name
        let fileName = path.basename(srcpath);

        //add file name for printing
        printHelper += "*"+fileName;
    }else{
        // get directory name
        let dirName = path.basename(srcpath);

        // add directory name for printing
        printHelper += dirName +"(folder) : ";

        // read directory contents
        var readDir = fs.readdirSync(srcpath);

        for(let idx = 0;idx<readDir.length;idx++){
            // add content of directory for printing
            printHelper += " "+readDir[idx];
        }
    }
    console.log(printHelper);
    if(ans){
        var readDir = fs.readdirSync(srcpath);
    
        for(let idx = 0;idx<readDir.length;idx++){
            viewTree(path.join(srcpath,readDir[idx]));
        }
    }
}
viewTree(srcpath);