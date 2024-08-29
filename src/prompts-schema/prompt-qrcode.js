import chalk from "chalk";
import prompt from "prompt";

const promptQrCode = [
  {
    name: "link",
    description: chalk.white("Digite o link para gerar o QR Code")
  },
  {
    name: "type",
    description: chalk.white("Prefere gerar o QR Code em: ( 1 - Imagem | 2 - Terminal)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Digite um valor válido (1 ou 2)"),
    required: true
  }
];

export default promptQrCode;