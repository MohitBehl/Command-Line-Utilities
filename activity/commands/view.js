let fs = require("fs");
let path = require("path");
//viewList implementation
function viewList(srcpath){
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
            viewList(path.join(srcpath,readDir[idx]));
        }
    }
}
//view tree implementation
function viewTree(srcpath,indent){
    let ans = fs.lstatSync(srcpath).isDirectory();

    let printHelper = indent;

    if(ans == false){
        //get file name
        let fileName = path.basename(srcpath);

        //add file name for printing
        printHelper += "*"+fileName;
        console.log(printHelper);
    }else{
        // get directory name
        let dirName = path.basename(srcpath);

        // add directory name for printing
        printHelper += dirName +"(folder)";

        // read directory contents
        var readDir = fs.readdirSync(srcpath);
        console.log(printHelper);
        for(let idx = 0;idx<readDir.length;idx++){
            viewTree(path.join(srcpath,readDir[idx]),indent+"\t");
        }
    }
    
}
module.exports = function view(){
    console.log("view command accepted");

    let srcPath = arguments[0];
    let mode = arguments[1];

    //decide the mode
    if(mode == "-t"){
        viewTree(srcPath,"");
    }else if(mode == "-l"){
        viewList(srcPath);
    }else{
        console.log("wrong input");
    }
};