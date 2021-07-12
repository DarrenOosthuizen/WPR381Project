//Function for looping through choosen directory to get all folders and subfolder
import { ThroughDirectory, SortedDirectory, SortOrderFolder } from './directory.js'
//Archive Import
import { zip } from 'zip-a-folder';

//Function to look for all folder in path
ThroughDirectory("./foo")
//Function to sort folders in order of tree
SortOrderFolder()


//Function to Compress given folder directories to ZIP format
function CompressZIP() {
    SortedDirectory.forEach(async element => {
        await zip(element, element + '.zip')
    });
}


//Function to Compress given folder directories to RAR format
function CompressRAR() {
    SortedDirectory.forEach(async element => {

        await zip(element, element + '.rar')
    });
}


//Function to Compress given folder directories to 7zip format
function Compress7ZIP() {
    SortedDirectory.forEach(async element => {

        await zip(element, element + '.7Z')
    });
}


//Function to Compress given folder directories to RAR4 format
function CompressRAR4() {
    SortedDirectory.forEach(async element => {

        await zip(element, element + '.rar4')
    });
}

//Export the various types of compression methods for use in other .js files
export { CompressZIP, Compress7ZIP, CompressRAR, CompressRAR4 }