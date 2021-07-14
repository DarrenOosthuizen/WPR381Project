const directory_tree = require('directory-tree');
const extract = require('extract-zip');
const fs = require('fs');
const path = require('path');

const __dirname = path.resolve();
  
const extractZip = async (source,target) => {
    try {
        await extract(path.resolve( __dirname ,source ), { dir: path.resolve( __dirname , target ) });
        console.log('Extraction complete');
      } catch (err) {
        console.log("Error Extracting: " + err);
      }
}
const recursive_directory_search = async(tree) => {
    if (tree.children){
        for (let i=0; i<tree.children.length; i++){
            if (tree.children[i].extension == ".zip"){    
                await extractZip(tree.children[i].path, tree.children[i].path.replace(/\.zip$/,""));
                await fs.rmSync(tree.children[i].path); 
                recursive_directory_search(directory_tree(tree.children[i].path.replace(/\.zip$/,"")));
            }
        }
    }
    
}

const extractFiles = async(location) => {
    recursive_directory_search(directory_tree(location));
};

module.exports = extractFiles;


 

 