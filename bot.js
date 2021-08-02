require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


const command = require('./Commands/Command.js')
const help = require('./Commands/help.js');
const invitationmsg = require('./Commands/Invitation.js');
const topics = require('./Commands/topic.js');

client.on('ready', () => {

    console.log(`${client.user.tag} has logged in.`);

    command(client, 'cc', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
        else {
            message.channel.send('Sorry! You don`t have permission to use this command.')
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


    command(client, 'topics', (message) => {
        message.channel.send(topics);
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
const PREFIX = "+search";


client.on('message', (message) => {
    if (message.content.startsWith(PREFIX)) {
        const [...args] = message.content
            .split(/\s+/);

        if (args[1] === 'SinglyLL' && args[3] === 'C++' || args[3] === 'c++') {
            message.channel.send('https://youtu.be/vcQIFT79_50');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Python' || args[3] === 'python') {
            message.channel.send('https://youtu.be/vyUh8brE7is');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Java' || args[3] === 'java') {
            message.channel.send('https://youtu.be/Ovhj6qDSF9M');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'C++' || args[3] === 'c++') {
            message.channel.send('https://youtu.be/JdQeNxWCguQ?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Python' || args[3] === 'python') {
            message.channel.send('https://youtu.be/UADuKgCraaY?list=RDCMUC63URkuUvnugRBeTNqmToKg');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Java' || args[3] === 'java') {
            message.channel.send('https://youtu.be/ZlNKNSz88Nk');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'C++' || args[3] === 'c++') {
            message.channel.send('https://youtu.be/HMkdlu5sP4A');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Python' || args[3] === 'python') {
            message.channel.send('https://youtu.be/t8lyrfPStN0');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Java' || args[3] === 'java') {
            message.channel.send('https://youtu.be/5XJGIDonHg4?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'C++' || args[3] === 'c++') {
            message.channel.send('https://youtu.be/F1F2imiOJfk?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
            message.channel.send('https://youtu.be/sFVxsglODoo?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Python' || args[3] === 'python') {
            message.channel.send('');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Java' || args[3] === 'java') {
            message.channel.send('https://youtu.be/AzMA2ldkt-w?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
    }

});

client.login(process.env.DISCORD_BOT_TOKEN);
