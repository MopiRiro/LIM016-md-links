import colors from 'colors';
import figlet from "figlet";
export const helpMsg = `

${colors.yellow(`Use this structure : mdLinks <route> <command> to run the cli. 
But also you can write only mdLinks <route> and you will obtain the link, its text and its file.`)}

╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                      ${colors.green('**HELP** ')}                                                       ║
╠══════════════════════════════════════╦═══════════════════════════════════════════════════════════════════════════════╣
║ ${colors.green('--validate')}                           ║ Show the link, its text, its route, its status number and its status message. ║
╠══════════════════════════════════════╬═══════════════════════════════════════════════════════════════════════════════╣
║ ${colors.green('--stats')}                              ║ Show the total links and the unique links.                                    ║
╠══════════════════════════════════════╬═══════════════════════════════════════════════════════════════════════════════╣
║ ${colors.green('--stats --validate')}                   ║ Show the total, unique and broken links.                                      ║
╚══════════════════════════════════════╩═══════════════════════════════════════════════════════════════════════════════╝
` ;

export const banner = colors.rainbow(
    figlet.textSync("MD - LINKS", {
      font: "Chunky", //Bubble Fuzzy Rectangles Chunky Crazy Cybermedium
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

  export const welcomeBanner = colors.rainbow(
    figlet.textSync("Welcome To", {
      font: "Chunky", //Bubble Fuzzy Rectangles Chunky Crazy Cybermedium
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

export const moreInfoMsg = `
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════
${colors.red("Invalid command. To be able to show the mode of use and the existing commands in the library use 'md-mocgor --help'")}
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════
`;