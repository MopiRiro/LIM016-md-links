#!/usr/bin/env node
import colors from 'colors';
import chalk from "chalk";
import figlet from "figlet";
import { argv } from 'process';
import {mdLinks} from './md-links.js';

// import {
//   totalLinks,
//   uniqueLinks,
//   brokenLinks,
// } from './cli-functions.js'


  export const banner = colors.rainbow(
    figlet.textSync("MD - LINKS", {
      font: "Chunky", //Bubble Fuzzy Rectangles Chunky Crazy Cybermedium
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

console.log(banner);

export const msjError = chalk.black.bgRed.bold('ERROR');
// console.log(msjError);
// const log = console.log;
// Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));


// const argvD = argv.slice(2);
// const arrayArgv = argv;
// console.log(arrayArgv);
// const arrayPrueba = arrayArgv[2];

// console.log(arrayPrueba);
//node src/cli.js one two=three four
//Devuelve un array con la opcion [ 'one', 'two=three', 'four' ]



export const cli = (argvCli) => {
  if(argvCli.length===1){
      mdLinks((argv[1]), {validate:false})
      .then((res)=> {
        console.log(res);
      }).catch((e)=>console.log(e));
    }
};


