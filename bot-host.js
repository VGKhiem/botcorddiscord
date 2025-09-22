require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`✅ Bot host đã đăng nhập: ${client.user.tag}`);
  client.user.setStatus('online'); // 'invisible' nếu muốn bot hiển thị offline
});

client.login(process.env.DISCORD_TOKEN);
