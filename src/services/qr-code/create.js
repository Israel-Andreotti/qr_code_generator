import prompt from "prompt";
import promptQrCode from "../../prompts-schema/prompt-qrcode.js";
import handler from "./handle.js";

async function createQrCode() {
  prompt.get(promptQrCode, handler)

  prompt.start();
}

export default createQrCode;