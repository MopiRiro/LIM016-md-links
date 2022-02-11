#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { argv } from 'process';


export const banner = chalk.blue.bold(
    figlet.textSync("MD - LINKS", {
      font: "Chunky", //Bubble Fuzzy Rectangles Chunky Crazy Cybermedium
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
  

console.log(banner);

const argvD = argv.slice(2);

console.log(argvD[0]);

