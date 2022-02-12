#!/usr/bin/env node
import colors from 'colors';
import chalk from "chalk";
import figlet from "figlet";
import { argv } from 'process';

import {
  totalLinks,
  uniqueLinks,
  brokenLinks,
} from './cli-functions.js'


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
// const argvD = argv.slice(2);

// console.log(argvD[0]);

// const log = console.log;

// Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(msjError);


