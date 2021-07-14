//Function that will run to print the menu to the user
const {extractFiles} = require("./extract");
console.log("hello");

 
extractFiles("./foo"); 
 
const { PrintMenu } = require("./menu");
const path = require('path');

const directory_tree = require('directory-tree');
const getSubDirectories = (path) => {
    return directory_tree(path).children.filter(child => child.type === "directory");
}
//Printing the Menu

PrintMenu();

const prompt = require("prompt-sync")({sigint: true});
let currentPath = path.resolve( __dirname ,"./") ;
let running = true;
while (running) {
     
    let arguments = prompt(currentPath + "> ");
    let args = arguments.split(" ");
    if (args[0] == "cd") {
        if (args[1].length == 0){
            console.log("Enter second argument for cd (location) e.g. cd ./foo"); 
            continue;
        }else if (args[1] == ".."){
            currentPath =  path.resolve( currentPath ,"../");
            //console.log(currentPath);
        }else {
            let dirs = getSubDirectories(currentPath) 
            let isDir = false;
            for (let i = 0; i < dirs.length; i++) {
                if ("./" + dirs[i].name == args[1]){
                    isDir = true; 
                } 
            }
            if (isDir){
                currentPath = path.resolve( currentPath, args[1]);
                console.log(currentPath);
            }else{
                console.log(args[1] + " is not a directory");
            }
        }
    }else if (args[0] == "ls"){
        let dirs = getSubDirectories(currentPath) ;    
            for (let i = 0; i < dirs.length; i++) {
                console.log("./" + dirs[i].name);      
            }
    }else if (args[0] == "extract"){
        if (args[1].length == 0){
            console.log("Enter second argument for extract (file) e.g. extract ./foo.zip"); 
            continue;
        }else{
            let dirs = getSubDirectories(currentPath) 
            let isDir = false;
            for (let i = 0; i < dirs.length; i++) {
                if ("./" + dirs[i].name == args[1]){
                    isDir = true; 
                } 
            }
                if (isDir){
                    console.log("extracting " + args[1] + " to " + currentPath);
                    
                }
            }
        }
    
}


//     //console.log(args);

   
