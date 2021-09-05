require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment')

const command = require('./Commands/Command.js')
const help = require('./Commands/help.js');
const invitationmsg = require('./Commands/Invitation.js');
const topics = require('./Commands/topic.js');
const cc = require('./Commands/cc.js');
const serverinfo = require('./Commands/Serverinfo.js');
const SendLink = require('./Commands/Links.js');



client.on('ready', () => {

    console.log(`${client.user.tag} has logged in.`);
    
    command(client, ['cc', 'clearchannel'], message => {
        cc(message);
    });


    client.user.setPresence({
        activity: {
            name: `'+' for help`,
            type: 0,
        }
    })

    command(client, 'status', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const content = message.content.replace('+status', '')

            client.user.setPresence({
                activity: {
                    name: content,
                    type: 0,
                }
            })
        }
        else {
            message.channel.send('Sorry! You don`t have permission to use this command.')
        }
    });
    command(client, ["Meme","meme"], (message) => {
        message.channel.send("Coming Soon!!");
    });

    command(client, 'topics', (message) => {
        message.channel.send(topics);
    });

    command(client, 'serverInfo', (message) => {
        

            serverinfo(message);
    })

    command(client, 'serverCount', (message) => {
        let serverlist = 0
        client.guilds.cache.forEach((guild) => {
            serverlist += 1;
        });
        message.channel.send('DSA-Bot is currently running in ' + serverlist + ' servers!!');
    });

    command(client, 'invite', (message) => {
        invitationmsg(message);
    });

});

client.on('message', (message) => {
    if (message.content === '+') {
        message.channel.send(help);
    }
});


const PREFIX = "+show";


client.on('message', (message) => {
    if (message.content.startsWith(PREFIX)) {
        SendLink(message);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
