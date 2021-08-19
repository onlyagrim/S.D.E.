require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment')

const command = require('./Commands/Command.js')
const help = require('./Commands/help.js');
const invitationmsg = require('./Commands/Invitation.js');
const topics = require('./Commands/topic.js');
const cc = require('./Commands/cc.js');


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
        const { guild } = message

        const { name, owner, description } = guild
        const icon = guild.iconURL()
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;



        const Embed = new Discord.MessageEmbed()
            .setTitle(`Server info for "${name}"`)
            .setThumbnail(icon)
            .addFields(
                {
                    name: "Description",
                    value: description
                },
                {
                    name: "Owner",
                    value: owner

                },
                {
                    name: "Created",
                    value: `${moment(guild.createdTimestamp).format('LT')}, ${moment(guild.createdTimestamp).format('LL')}, ${moment(guild.createdTimestamp).fromNow()}`
                },

            )
            .addField('Statistics:', [
                `**Role Count:** ${roles.length}`,
                `**Emoji Count:** ${emojis.size}`,
                `**Member Count:** ${message.guild.memberCount}`,
                `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**Bots:** ${members.filter(member => member.user.bot).size}`,
                `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                '\u200b'
            ])
            .addField('Presence', [
                `**Online:** ${message.guild.members.cache.filter(member => member.presence.status === 'online').size}`,
                `**Idle:** ${message.guild.members.cache.filter(member => member.presence.status === 'idle').size}`,
                `**Do Not Disturb:** ${message.guild.members.cache.filter(member => member.presence.status === 'dnd').size}`,
                `**Offline:** ${message.guild.members.cache.filter(member => member.presence.status === 'offline').size}`,
                '\u200b'
            ])

            .addField(`Roles [${roles.length}]`, roles.join(', '))

            .setTimestamp()
            .setFooter(
                'Made with ❤️ by Bhuvnesh',

                'https://i.ibb.co/jG3Gffy/dsa.jpg'
            );

        message.channel.send(Embed)
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
        const [...args] = message.content
            .split(/\s+/);

        if (args[1] === 'SinglyLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/vcQIFT79_50');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/vyUh8brE7is');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/Ovhj6qDSF9M');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/JdQeNxWCguQ?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/UADuKgCraaY?list=RDCMUC63URkuUvnugRBeTNqmToKg');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/ZlNKNSz88Nk');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/HMkdlu5sP4A');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/t8lyrfPStN0');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/5XJGIDonHg4?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/F1F2imiOJfk?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
            message.channel.send('https://youtu.be/sFVxsglODoo?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/AKO9nI4tuhs');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/AzMA2ldkt-w?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/Ebq7QUPaU7I');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'Python' ) {
            message.channel.send('https://youtu.be/K9LHxuE_Jrc');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/b-MB4FcrTHs');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/fbonDkYsKj0');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'Python' ) {
            message.channel.send('https://youtu.be/pWnH4Q3eMKI');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/T0qUiI_L7S8');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/Yi8Im4_eSQI?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'Python' ) {
            message.channel.send('Sorry! This is unavailable but you can learn the concept int other language and try to code yourself!');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/Bf-P7TGD6QU');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/iEwX3XA5SDo?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'Python' ) {
            message.channel.send('Sorry! This is unavailable but you can learn the concept int other language and try to code yourself!');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/Mh8Dc8Fk-3E');
        }

    }

});

client.login(process.env.DISCORD_BOT_TOKEN);
