import * as crypto from "crypto";
import { Buffer } from "buffer";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text: string): string {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(":");
  const ivBuffer = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, ivBuffer);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

function startEncryptionProcess() {
  rl.question(
    "Digite uma mensagem para cifrar (ou pressione Enter para usar a mensagem padrão): ",
    (inputMessage) => {
      const message = inputMessage || "Esta é uma mensagem secreta!";
      const encryptedMessage = encrypt(message);
      console.log("\nMensagem Cifrada:", encryptedMessage);

      const decryptedMessage = decrypt(encryptedMessage);
      console.log("Mensagem Decifrada:", decryptedMessage);

      rl.close();
    }
  );
}

startEncryptionProcess();
