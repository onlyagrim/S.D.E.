const Discord = require('discord.js');
const Embed2 = new Discord.MessageEmbed()
    .setImage('https://i.ibb.co/jG3Gffy/dsa.jpg')
	.setColor('0x0099ff')
    .setTitle('DSA Bot')
	.addFields(
		{
			name:'Hello!',
            value:'Hope you are doing good!',
        },
        {
            name:'To invite me to your server:', 
            value:'[Click here!](https://discordapp.com/oauth2/authorize?client_id=871086013152391168&scope=bot&permissions=8)\n',
        },
		
	)
	.setTimestamp()
	
	.setFooter(
		'Made with ❤️ by Bhuvnesh',
        
		'https://i.ibb.co/jG3Gffy/dsa.jpg'
	);

module.exports = Embed2;
