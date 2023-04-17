let fs = require("fs");
let path = require("path");
let {utility} = require("./main.js")
function organize_fn(){
  
    let dirpath = process.cwd();
    let does_exist = fs.existsSync(dirpath);
    let dest_path = path.join(dirpath,"manager_file");
      if(does_exist){
       
         if(fs.existsSync(dest_path)==false){
            fs.mkdirSync(dest_path);
         }

         organize_fn2(dirpath,dest_path); 
    }

}
function organize_fn2(src,dest){
   let files = fs.readdirSync(src);
   for(let i=0;i<files.length;i++){
         let curr_file_path=path.join(src,files[i]);
         let is_file =fs.lstatSync(curr_file_path).isFile();
         if(is_file==false){
            continue;
         }
         let curr_ext=path.extname(curr_file_path);
         curr_ext = curr_ext.slice(1);
          
         for(let type in utility){
              for(let j=0;j<utility[type].length;j++){
                let ext = utility[type][j];
               
                 if(ext == curr_ext){
                     let final_dest=path.join(dest,type);
                     if(fs.existsSync(final_dest)==false){
                       fs.mkdirSync(final_dest);
                     } 
                     let final_dest_deep = path.join(final_dest,files[i]);
                     fs.copyFileSync(curr_file_path,final_dest_deep);
                     fs.unlinkSync(curr_file_path);
                 }
              }
         }
 
         
   } 
   
}
module.exports={
    org_key:organize_fn
 }