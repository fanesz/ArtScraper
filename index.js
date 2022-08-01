const { Client } = require("discord.js");
const Discord = require("discord.js");
const client = new Client({intents: 32767});
const { Collection } = require("discord.js");
const fs = require("fs");
const commandcooldown = new Set();
const config = require('./config.json')

const commandFiles = fs.readdirSync("./src").filter(file => file.endsWith(".js"));
client.commands = new Collection();
for(const file of commandFiles){
    const command = require(`./src/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('messageCreate', msg =>{
    if(msg.author.bot) return;

    if(msg.content == (config.prefix+'art')){
        msg.reply(config.prefix+'art (art name)')
    }

    if(msg.content.startsWith(config.prefix+'art ')){ 

        if (commandcooldown.has(msg.author.id)) {
            const cooldownembed = new Discord.MessageEmbed()
          .setDescription(config.cooldownMessage)
          .setColor(config.EmbedColor)
          msg.reply({embeds: [cooldownembed]});
        } else {
            commandcooldown.add(msg.author.id);
            setTimeout(() => {
                commandcooldown.delete(msg.author.id);
            }, parseInt(config.CommandCooldown) * 1000);
            client.commands.get('art').execute(msg);
        };
    }
})


client.login(config.token)
