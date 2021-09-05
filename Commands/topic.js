const Discord = require('discord.js');
const Embed3 = new Discord.MessageEmbed()
	.setColor('0x0099ff')

	.setAuthor(
		'DSA Bot',
		'https://i.ibb.co/jG3Gffy/dsa.jpg',
	)
	
	.addFields(
		{
			name:'Data Structures:',
            value:'`SinglyLL\n` `DoublyLL\n` `CircularLL\n` `StackByArray\n` `StackByLL\n` `QueueByArray\n` `QueueByLL\n` `QueueByStack\n` `CircularQueue\n` '
		},
		
	)
	.setTimestamp()
	
	.setFooter(
		'Made with ❤️ by Bhuvnesh',
        
		'https://i.ibb.co/jG3Gffy/dsa.jpg'
	);

module.exports = Embed3;