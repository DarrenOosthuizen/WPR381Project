const dirTree = require("directory-tree");
const { zip } = require("zip-a-folder");
const fs = require("fs");
let ParentTree;
let ChildTree;


 

let Value = [];
let SortedDirectory = [];

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

function SortOrderFolder() {
  let FolderSorted = [];
  Value.forEach((folder) => {
    let count = 0;
    for (let index = 0; index < folder.length; index++) {
      if (folder[index] == "\\") count++;
    }
    let array = [count, folder];
    FolderSorted.push(array);
  });
  FolderSorted.sort(sortFolders);
  FolderSorted.forEach((element) => {
    SortedDirectory.push(element[1]);
  });
}

function sortFolders(a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return a[0] > b[0] ? -1 : 1;
  }
}

async function CompressZIP() {
  while (SortedDirectory.length > 0) {
    await zip(SortedDirectory[0], SortedDirectory[0] + ".zip");
    await fs.rmSync(SortedDirectory[0], { recursive: true });
    SortedDirectory.shift();
  }
}

async function CompressRAR() {
  while (SortedDirectory.length > 0) {
    await zip(SortedDirectory[0], SortedDirectory[0] + ".rar");
    await fs.rmSync(SortedDirectory[0], { recursive: true });
    SortedDirectory.shift();
  }
}

async function Compress7Z() {
  while (SortedDirectory.length > 0) {
    await zip(SortedDirectory[0], SortedDirectory[0] + ".7Z");
    await fs.rmSync(SortedDirectory[0], { recursive: true });
    SortedDirectory.shift();
  }
}

async function CompressRAR4() {
  while (SortedDirectory.length > 0) {
    await zip(SortedDirectory[0], SortedDirectory[0] + ".rar4");
    await fs.rmSync(SortedDirectory[0], { recursive: true });
    SortedDirectory.shift();
  }
}
const compress = (path) => {
  Value = [];
  SortedDirectory = [];
  
  ParentTree = dirTree(path);
  ChildTree = ParentTree.children;
  GetDir(ChildTree);
  SortOrderFolder();
   
}
 

module.exports = { Compress7Z, CompressRAR, CompressZIP, CompressRAR4, compress };
