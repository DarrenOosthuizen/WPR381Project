// const dirTree = require("directory-tree");
// const {zip} = require('zip-a-folder')
// const fs = require('fs')
import fs from 'fs'
import  {zip} from "zip-a-folder";
import dirTree from "directory-tree"

const ParentTree = dirTree("./foo");
const ChildTree = ParentTree.children;


let Value = [];
let SortedDirectory = []

function GetDir(directory) {
  for (var k in directory) {
    if (directory[k].type == "directory") {
      Value.push(directory[k].path);
      if (directory[k].children.length >= 1) {
        GetDir(directory[k].children);
      }
    }
  }
}


function SortOrderFolder()
{
    let FolderSorted = []
    Value.forEach(folder => {
        let count = 0;
        for (let index = 0; index < folder.length; index++) {
            if(folder[index] == "\\")
           count++;
        }
        let array = [count,folder]
        FolderSorted.push(array)
    });
    FolderSorted.sort(sortFolders)
    FolderSorted.forEach(element => {
        SortedDirectory.push(element[1])
    });
}

function sortFolders(a,b){
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}


async function CompressZIP()
{
    while(SortedDirectory.length >0)
    {
    await zip(SortedDirectory[0], SortedDirectory[0] + '.zip');
    await fs.rmdirSync(SortedDirectory[0],{recursive:true})
    SortedDirectory.shift()
    }

}

GetDir(ChildTree)
SortOrderFolder()
CompressZIP()

