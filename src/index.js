import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQrCode from "./services/qr-code/create.js";



async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) {
      console.log("Escolheu o QR Code");
      
      await createQrCode()
    }
    if (result.select == 2) {
      console.log("Escolheu a Senha");     
    }
  })
  prompt.start()
}

main()