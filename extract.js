const directory_tree = require('directory-tree');
const extract = require("extract-zip");
const fs = require('fs');
const path = require('path');

const extractZip = async (source,target) => {
    try {
        await extract(path.resolve( __dirname ,source ), { dir: path.resolve( __dirname , target ) });
        //console.log('Extraction complete');
      } catch (err) {
        console.log("Error Extracting: " + err);
      }
}
const recursive_directory_search = async(tree) => {
    if (tree.children){   
        for (let i=0; i<tree.children.length; i++){         
            if (tree.children[i].extension == ".zip"){ 
                let zipPath = tree.children[i].path;
                let folderPath = tree.children[i].path.replace(/\.zip$/,"");
                await extractZip(zipPath, folderPath);
                await fs.rmSync(zipPath); 
                recursive_directory_search(directory_tree(folderPath));
            }else if(tree.children[i].extension == ".rar4"){
                let zipPath = tree.children[i].path;
                let folderPath = tree.children[i].path.replace(/\.rar4$/,"");
                await extractZip(zipPath, folderPath);
                await fs.rmSync(zipPath); 
                recursive_directory_search(directory_tree(folderPath));
            }else if(tree.children[i].extension == ".7Z"){
                let zipPath = tree.children[i].path;
                let folderPath = tree.children[i].path.replace(/\.7Z$/,"");
                await extractZip(zipPath, folderPath);
                await fs.rmSync(zipPath); 
                recursive_directory_search(directory_tree(folderPath));
            }else if(tree.children[i].extension == ".rar"){
                let zipPath = tree.children[i].path;
                let folderPath = tree.children[i].path.replace(/\.rar$/,"");
                await extractZip(zipPath, folderPath);
                await fs.rmSync(zipPath); 
                recursive_directory_search(directory_tree(folderPath));
            }      
        }
    }
}

async function extractFiles(location) {
    await recursive_directory_search(directory_tree(location));
};
 
module.exports = {extractFiles};


 

 