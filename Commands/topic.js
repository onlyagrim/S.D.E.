const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("DSA Bot", "https://i.ibb.co/jG3Gffy/dsa.jpg")

  .addFields(
    {
      name: "Data Structures:",
      value: "`◽CircularLL\n``◽DoublyLL\n``◽SinglyLL\n`",
    },
    {
      name: "Algorithms:",
      value: "`◽BinarySearch\n``◽LinearSearch\n`",
    }
  )

  .setFooter(
    "Made with ❤️ by Bhuvnesh",

    "https://i.ibb.co/jG3Gffy/dsa.jpg"
  );

module.exports = Embed3;
