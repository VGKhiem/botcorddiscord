require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`✅ Bot host đã đăng nhập: ${client.user.tag}`);
  client.user.setStatus('online');
});

client.login(process.env.DISCORD_TOKEN);

//Express để ping giữ Web Service online
const app = express();
app.get('/', (req, res) => res.send('Bot is online'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy trên port ${PORT}`));
