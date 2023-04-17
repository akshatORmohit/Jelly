#!/usr/bin/env node
let inputarr = process.argv.slice(2);

let help_obj = require("./help.js");
let org_obj = require("./organize.js");
let tree_obj = require("./tree.js");
let fs = require("fs");
let path = require("path");
let utility = {
   media: ["mp4", "mkv","torrent" ,"3gp"],
   audio:["mp3"],
   archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
   documents: ['docx','ppt','doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
   app: ['exe', 'dmg', 'pkg', "deb"],
   images:['jpg' , 'png','jpeg']

}

let command = inputarr[0];
switch(command){
     case "tree":
        console.log("Printing Tree of your Current Directory as follows :");
        tree_obj.tree_key();
        break;
     case "organize":
        
        console.log("Organizing: ");
        org_obj.org_key();
        break;
     case "help" :
        console.log("HELP : ");
        help_obj.help_key();
        break;
     default:
     console.log("Please 🙏 Input Right command");
     break;
}

module.exports = {utility}
