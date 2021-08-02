const Discord = require('discord.js');
const Embed1 = new Discord.MessageEmbed()
	.setColor('0x0099ff')

	.setAuthor(
		'DSA Bot',
		'https://i.ibb.co/jG3Gffy/dsa.jpg',
	)
	
	.addFields(
		{
			name:'Data Structures:',
            value:'`SinglyLL\n` `DoublyLL\n` `CircularLL\n` `Stack\n` `SimpleQueue\n` `CircularQueue\n` `PriorityQueue\n` `DoubleEndedQueue\n` '
		},
		
	)
	.setTimestamp()
	
	.setFooter(
		'Made with ❤️ by Bhuvnesh',
        
		'https://i.ibb.co/jG3Gffy/dsa.jpg'
	);

module.exports = Embed1;