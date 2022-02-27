const Discord = require("discord.js");

const Embed1 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setTitle("Never Stop Learning!")
  .setAuthor("S.D.E", "https://i.ibb.co/HdBBqG1/mob-dark.png")
  .setDescription(
    "Sacrificing my sleep and working full time at discord to help people by providing code for various data strutures, algorithms and coding problems!"
  )
  .addFields(
    {
      name: "DSA:",
      value:
        "`Languages: Cpp, Python & Java\n``+ds <ds-code> in <Language>\n``+DSlist\n``+algo <algo-code> in <Language>\n``+Algolist\n``+problem <p-code> in <Language>\n``+problemsList\n`",
    },
    {
      name: "Coding contests:",
      value: "`+codechef\n``+leetcode\n``+codeforces\n`",
    },
    {
      name: "General:",
      value:
        "`+invite\n``+serverInfo\n``+serverCount\n``+version\n``+uptime\n`",
    },
    {
      name: "Admin:",
      value: "`+cc or +clearchannel\n`",
    }
  )

  .setFooter(
    `Made with ❤️ by Bhuvnesh`,
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed1;
