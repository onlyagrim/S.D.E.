const Discord = require("discord.js");
const Embed2 = new Discord.MessageEmbed()
  .setImage("https://i.ibb.co/1RJ8fc1/mob-dark2.png")
  .setColor("0x0099ff")
  .setTitle("From : S.D.E.")
  .addFields(
    {
      name: "Hello!",
      value: "Hope you are doing good!",
    },
    {
      name: "To invite me to your server:",
      value:
        "[Click here!](https://discordapp.com/oauth2/authorize?client_id=871086013152391168&scope=bot&permissions=8)\n",
    },
    {
      name: "Also we would like you to know that S.D.E. encourages Open-Source contribution. So if you want to contribute: ",
      value:
        "[Click here!](https://github.com/Bhuvnesh875/DSA-Bot/blob/main/Contributing.md)\n",
    },
    {
      name: "Wanna get the latest updates about S.D.E.?",
      value:
        "Join the developement server [here](https://discord.gg/bgz7vFcTyn)!\n",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",

    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed2;
