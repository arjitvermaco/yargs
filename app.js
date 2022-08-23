#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./utils")
// const argv = yargs(process.argv.slice(2)).argv;

// const argv = yargs(hideBin(process.argv)).argv;

// console.log(argv);
// if(argv.ships == 4){
//     console.log("Ships quantity:" , argv.ships);

// }

// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!')
//   } else {
//     console.log('Retreat from the xupptumblers!')
//   }

// if (argv.type) {
//   switch (argv.type) {
//     case "add":
//       console.log("Adding New Note");
//       return;
//     case "remove":
//       console.log("Removing Note");
//   }
// } else {
//   console.log(chalk.red("Please add type"));
// }




// works
yargs(hideBin(process.argv)).command({
    command:'add',
    describe:'Adding command',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string",
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.addNote(argv.title , argv.body);
    }
}).parse()


yargs(hideBin(process.argv)).command({
    command:'remove',
    describe:'Removing Note',
    builder:{
        id:{
            describe:"Enter Note ID",
            demandOption:true,
            type:"string",
        }
    },
    handler:function(argv){
        notes.removeNote(argv.id);
    }
}).parse()



yargs(hideBin(process.argv)).command({
    command:'all',
    describe:'Getting All Notes',
  
    handler:function(){
        notes.getNotes();
    }
}).parse()


yargs(hideBin(process.argv)).command({
    command:'update',
    describe:'Update any note',
    builder:{
        id:{
            describe:"Enter Note ID",
            demandOption:true,
            type:"string",
        },
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string",
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.updateNote(argv.id, argv.title, argv.body);
    }
}).parse()





// works 1
// yargs(hideBin(process.argv)).command({
//     command:'add',
//     describe:'Adding command',
//     builder:{
//         title:{
//             describe:"Note Title",
//             demandOption:true,
//             type:"string",
//         },
//         body:{
//             describe:"Note Body",
//             demandOption:true,
//             type:"string"
//         }
//     },
//     handler:function(argv){
//         console.log('Title:'+ argv.title)
//         console.log('Body:'+ argv.body)

//     }
// }).parse()


// without yargs
// const argv = process.argv();
// console.log(process.argv.slice(2));
// const argv = process.argv.slice(2);
// console.log(argv);
// if(argv[0] === '--ships'){
//     console.log("Ships quantity:" , argv[1]);
//     if(argv[1]){
//         console.log("WE have ships and quantity")
//     }else{
//         console.log("Missing arguments")
//     }
// }

// if(command === 'add'){

//     console.log(chalk.green("Adding Note"))
// }else if(command === 'remove'){
//     console.log(chalk.red("Removing Note"))
// }
