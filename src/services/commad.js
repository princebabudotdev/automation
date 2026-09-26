import { automationCommands } from "../data/data";

const terminalResponse = ({ input }) => {
  for (const elem of automationCommands) {
    const command = elem.commands.find(
      (command) => input.trim() === command.command.trim(),
    );

    if (command) {
      window.open(elem.url, "_blank");
    }

    // return command.aliases[0];
  }

  return null;
};

export default terminalResponse;
