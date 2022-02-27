const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields({
    name: "Data Structures(ds-code):",
    value:
      "`◽Arrays(001)\n``◽CircularLL(002)\n``◽CircularDoublyLL(003)\n``◽DoublyLL(004)\n``◽QueueUsingArray(005)\n``◽QueueUsingLL(006)\n``◽SinglyLL(007)\n``◽StackUsingArray(008)\n``◽StackUsingLL(009)\n`",
  })
  .setFooter(
    "Made with ❤️ by Bhuvnesh",

    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
