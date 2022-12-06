import { Client, Message, GatewayIntentBits } from "discord.js";
import { prefix, token } from "../config.json";

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ]
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", async (message: Message) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send("🚀 pong");
    // message.reply('pong!');
  }
});

client.login(token);