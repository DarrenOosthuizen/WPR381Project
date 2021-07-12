//Function for looping through directory and getting all folders and subfolders
import FS from "fs";
import Path from "path"

let Folders = []
let SortedDirectory = []
function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if(FS.statSync(Absolute).isDirectory())
        {
            Folders.push(Absolute)
        }
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
    });

}

//Function to get number of slashes in filepath and sort in order
function SortOrderFolder()
{
    let FolderSorted = []
    Folders.forEach(folder => {
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

//Function used to sort Multi-Dimensional Arrayn in ASC Order
function sortFolders(a,b){
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

export{ThroughDirectory, SortedDirectory,SortOrderFolder};