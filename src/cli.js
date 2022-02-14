#!/usr/bin/env node
import colors from 'colors';
import chalk from "chalk";
import { argv } from 'process';
import { 
  helpMsg, 
  banner, 
  moreInfoMsg
} from "./msg.js";
import { 
  optionValidateFalse,
  optionValidateTrue,
  optionStats,
  optionStatsValidate,
  } from './cli-functions.js';

export const msjError = chalk.black.bgRed.bold('ERROR');



// const arrarCli = argv.slice(2);
// const arrarCli = argv;


// console.log(arrarCli);


// const pathCli = argv[2];


// console.log(pathCli);



//  const arrayCli = argv;
//  console.log(arrayCli);
//node src/cli.js one two=three four
//Devuelve un array con la opcion [ 'one', 'two=three', 'four' ]
const pathCli = argv[2];
const arrayCli = argv;
// console.log(arrayCli);

// SI no se ingresa nada
if(arrayCli.length===2){
  console.log(colors.yellow(moreInfoMsg));
}
else if(arrayCli.length===3 && arrayCli[2]=== '--help'){
  console.log(colors.yellow(helpMsg));
}
else if(arrayCli.length===3){
  console.log(banner);
  optionValidateFalse(pathCli);
}
else if(arrayCli.length===4 && arrayCli[3]==='--validate'){
  console.log(banner);
  optionValidateTrue(pathCli);
}
else if(arrayCli.length===4 && arrayCli[3]==='--stats'){
  console.log(banner);
  optionStats(pathCli);
}
else if(arrayCli.length===5 && arrayCli[3]==='--stats' && arrayCli[4]==='--validate'){
  console.log(banner);
  optionStatsValidate(pathCli);
}
else if(arrayCli.length===5 && arrayCli[3]==='--validate' && arrayCli[4]==='--stats'){
  console.log(banner);
  optionStatsValidate(pathCli);
} else {
  console.log(moreInfoMsg);
}
