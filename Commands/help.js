const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
	.setColor('0x0099ff')
	.setTitle('Learn with FUN')
	.setAuthor(
		'DSA Bot',
		'https://i.ibb.co/jG3Gffy/dsa.jpg',
		'https://discord.js.org'
	)
	.setDescription(
		'Data structure and algorithms is one of the most important topic in a Software Engineer`s life. DSA Bot brings you the best resources to learn every topic of DSA.'
	)
	.addFields(
		{
			name:'DSA Command:', 
			value:'`Available languages: C++, Python, Java\n` `+search <Topic> in <Language>\n` `+topics\n`'
		},
		{
			name: 'General Commands:',
			value: '`+help\n`  `+invite\n` `+servers\n` `+version\n`'
		},
		{ name: 'Fun Commands:' ,value: '`+meme\n`' },
		{
			name: ' Admin Commands:',
			value: '`+cc\n` `+status\n\n\n`'
		}
	)
	.setTimestamp()
	
	.setFooter(
		'Made with ❤️ by Bhuvnesh',
        
		'https://i.ibb.co/jG3Gffy/dsa.jpg'
	);

module.exports = Embed;