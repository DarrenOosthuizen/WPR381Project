const {extractFiles} = require("./extract");
const readline = require('readline');
const {Compress7Z, CompressRAR, CompressZIP, CompressRAR4, compress } = require("./compress");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { PrintMenu } = require("./menu");
const path = require('path');

const directory_tree = require('directory-tree');
const getSubDirectories = (path) => {
    return directory_tree(path).children.filter(child => child.type === "directory");
}

PrintMenu();

let currentPath = path.resolve( __dirname ,"./") ;


const getLine = () => {
    rl.question(currentPath + "> ", (arguments) => {

    let args = arguments.split(" ");
    if (args[0] == "cd") {
        if (!args[1]){
            console.log("Enter second argument for cd (location) e.g. cd foo");   
        }else if (args[1] == ".."){
            currentPath =  path.resolve(currentPath ,"../");
        }else {
            let dirs = getSubDirectories(currentPath); 
            let isDir = false;
            for (let i = 0; i < dirs.length; i++) {
                if (dirs[i].name == args[1]){
                    isDir = true; 
                } 
            }
            if (isDir){
                currentPath = path.resolve( currentPath, args[1]);
            }else{
                console.log(args[1] + " is not a directory");
            }
        }
    }else if (args[0] == "ls"){
        let dirs = getSubDirectories(currentPath);    
            for (let i = 0; i < dirs.length; i++) {
                console.log(dirs[i].name);      
            }
    }else if (args[0] == "extract"){
        if (args[1].length == 0){
            console.log("Enter second argument for extract (file) e.g. extract foo.zip"); 
        }else{
            let dirs = getSubDirectories(currentPath) 
            let isDir = false;
            for (let i = 0; i < dirs.length; i++) {
                if (dirs[i].name == args[1]){
                    isDir = true; 
                } 
            }
                if (isDir){
                    console.log("extracting " + args[1] + " to " + currentPath); 
                    extractFiles(args[1]);
                }
        }
    }else if (args[0] == "compress"){
        if (!args[1]){
            console.log("Enter second argument for compress (file) e.g. compress foo"); 
        }else if (!args[2]){
            console.log("Enter third argument for compress (type: zip,rar,rar4,7Z) e.g. compress foo zip"); 
        }else if (args[2] == "zip"){
            console.log(args);
            compress(args[1]); 
            CompressZIP();
        }else if (args[2] == "rar"){
            compress(args[1]);
            CompressRAR(); 
        }else if (args[2] == "rar4"){
            compress(args[1]);
            CompressRAR4();
        }else if (args[2] == "7Z"){
            compress(args[1]);
            Compress7Z();
        }else {
            console.log("Please enter a valid compression type; (zip,rar,rar4,7Z)");
        }
    } 
        getLine();     
    });
}
getLine();
    
 
 




   
