import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.white.bold("Escolha a ferramenta: (1 - QR Code | 2 - Passoword)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha um opção válida"),
    required: true
  }
];

export default mainPrompt;