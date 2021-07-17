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
            console.log("\x1b[31m","Enter second argument for cd (location) e.g. cd foo","\x1b[33m",);   
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
                console.log("\x1b[31m", + args[1] + " is not a directory","\x1b[33m",);
            }
        }
    }else if (args[0] == "ls"){
        let dirs = getSubDirectories(currentPath);    
            for (let i = 0; i < dirs.length; i++) {
                console.log(dirs[i].name);      
            }
    }else if (args[0] == "extract"){
        if (args[1].length == 0){
            console.log("\x1b[31m","Enter second argument for extract (file) e.g. extract foo.zip","\x1b[33m",); 
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
            console.log("\x1b[31m","Enter second argument for compress (file) e.g. compress foo","\x1b[33m",); 
        }else if (!args[2]){
            console.log("\x1b[31m","Enter third argument for compress (type: zip,rar,rar4,7Z) e.g. compress foo zip","\x1b[33m",); 
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
            console.log("\x1b[31m","Please enter a valid compression type; (zip,rar,rar4,7Z)","\x1b[33m",);
        }
    }else if(args[0] == "help"){
        console.log(

            "\x1b[34m",
            "  Type cd .. to go back one directory",
            "\n   Type ls to list all folders in current directory",
            "\n   Type cd {foldername} to change to directory",
            "\n   Type compress {foldername} {archive selection} to compress the directory",
            "\n   Type extract {foldername} to extract the directory",
            "\n   Type EXIT to quit the Extracti-Nator!",
            "\n",
            "\x1b[33m",
          );
    }else if(args[0] == "EXIT" || args[0]== "exit"){
        console.log("Thank you for using Extract-Nator!! BYE BYE","\x1b[34m\x1b[0m","\x1b[1m")
        process.exit()
     
    }
        getLine();     
    });
}

getLine();

    
 
 




   
