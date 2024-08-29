import chalk from "chalk";
import handler from "./handle-password.js";

async function createPassword() {
  console.log(chalk.white("Gerando senha..."));
  const password = await handler();
  
  setTimeout( () => {
    console.log(chalk.white("Sua senha: " + password))
  }, 2000)
}

export default createPassword;