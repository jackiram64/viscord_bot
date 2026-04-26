// Import required modules 
const { Client, GatewayIntentBits } = require('discord.js'); 
require('dotenv').config(); 

// Create a new Discord client with message intent 
const client = new Client({ 
  intents: [ 
      GatewayIntentBits.Guilds,  
      GatewayIntentBits.GuildMessages,  
      GatewayIntentBits.MessageContent] 
}); 

// Bot is ready 
client.once('ready', () => { 
  console.log(`🤖 Logged in as ${client.user.tag}`); 
}); 

// Listen and respond to messages 
client.on('messageCreate', message => { 

  // Ignore messages from bots 
  if (message.author.bot) return; 

  // Respond to a specific message 
  if (message.content.toLowerCase() === 'hi discord mod') { 
    message.reply('Hi there! I am Discord mod :D . I never take showers and leave all my hairs behind in the kitchen :)'); 
  }
  
    if (message.content.toLowerCase() === 'zandee') { 
    message.reply('Did you just insult my weight? :bupAngry:'); 
  }

    if (message.content.toLowerCase() === 'master, master') { 
    message.reply('Master of puppets, Im pulling your strings'); 
  }
});   

// Log in to Discord using token from .env 
client.login(process.env.DISCORD_TOKEN); 
