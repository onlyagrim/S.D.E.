const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("DSA Bot", "https://i.ibb.co/jG3Gffy/dsa.jpg")

  .addFields({
    name: "Data Structures:",
    value:
      "`BinarySearch\n` `CircularLL\n` `DoublyLL\n` `LinearSearch\n` `SinglyLL\n` ",
  })

  .setFooter(
    "Made with ❤️ by Bhuvnesh",

    "https://i.ibb.co/jG3Gffy/dsa.jpg"
  );

module.exports = Embed3;
