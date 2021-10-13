const Discord = require('discord.js');
const Embed1 = new Discord.MessageEmbed()
	.setColor('0x0099ff')
	.setTitle('Learn with FUN')
	.setAuthor(
		'DSA Bot',
		'https://i.ibb.co/jG3Gffy/dsa.jpg',
		'https://discord.js.org'
	)
	.setDescription(
		'Data structure and algorithms is one of the most important topic in a Software Engineer`s life. DSA Bot brings you the resources to learn every topic of DSA.'
	)
	.addFields(
		{
			name:'DSA Command:', 
			value:'`Available languages: C++, Python, Java\n` `+code <Topic> in <Language>\n` `+topics\n`'
		},
		{
			name: 'General Commands:',
			value: '`+invite\n` `+serverInfo\n` `+serverCount\n`'
		},
		{ 
			name: 'Fun Commands:' ,
			value: '`+Meme\n`' 
		},
		{
			name: ' Admin Commands:',
			value: '`+cc or +clearchannel\n` '
		}
	)
	.setTimestamp()
	
	.setFooter(
		'Made with ❤️ by Bhuvnesh',
        
		'https://i.ibb.co/jG3Gffy/dsa.jpg'
	);

module.exports = Embed1;
