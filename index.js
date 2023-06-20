require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMembers] })
client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on(Discord.Events.GuildMemberAdd, member => {
    if (member.user.bot) {
        member.kick()
    } else {
        console.log(`New member: ${member.user.tag}`)
        let memberRole = member.guild.roles.cache.get('810160551824457758');
        member.roles.add(memberRole);
    }
});