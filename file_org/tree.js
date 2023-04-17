let fs = require("fs");
let path = require("path");
function tree_fn(){

    let dirpath = process.cwd();
       let children=fs.readdirSync(dirpath);
       let dirname = path.basename(dirpath);
       console.log(dirname ,"\t");
       
       for(let i=0;i<children.length;i++){
          let curr_path = path.join(dirpath,children[i]);
          try{
               if(fs.lstatSync(curr_path).isFile()){
                    console.log("|______",children[i]);
                    console.log(" ");
               }else{
                    tree_helper(curr_path);
               }
          }
          catch(err){
               console.log("You may have some non accessible files.")
          }
       }
       console.log("\t");
       console.log("\t");
 
 }
 
 function tree_helper(dirpath){
    
       let children=fs.readdirSync(dirpath);

       if(fs.existsSync(dirpath)==false){
         return;
       }
       let dirname = path.basename(dirpath);
       console.log(dirname ,"\t");
 
       for(let i=0;i<children.length;i++){
          let curr_path = path.join(dirpath,children[i]);
          try{
               if(fs.lstatSync(curr_path).isFile()){
                    console.log("|______",children[i]);
                    console.log(" ");
               }else{
                    tree_helper(curr_path);
               }
          }
          catch(err){
               console.log("You may have some non accessible files.")
          }
       }
       console.log("\t");
       console.log("\t");
 }
 module.exports={
   tree_key:tree_fn
 }
 