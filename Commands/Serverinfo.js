const Discord = require("discord.js");
const moment = require("moment");

function info(message) {
  const { guild } = message;

  const { name, owner, description } = guild;
  const icon = guild.iconURL();
  const roles = message.guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map((role) => role.toString());
  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const emojis = message.guild.emojis.cache;

  const Embed = new Discord.MessageEmbed()
    .setTitle(`Server info for "${name}"`)
    .setThumbnail(icon)
    .addFields(
      {
        name: "Description",
        value: description,
      },
      {
        name: "Owner",
        value: owner,
      },
      {
        name: "Created",
        value: `${moment(guild.createdTimestamp).format("LT")}, ${moment(
          guild.createdTimestamp
        ).format("LL")}, ${moment(guild.createdTimestamp).fromNow()}`,
      }
    )
    .addField("Statistics:", [
      `**Role Count:** ${roles.length}`,
      `**Emoji Count:** ${emojis.size}`,
      `**Member Count:** ${message.guild.memberCount}`,
      `**Humans:** ${members.filter((member) => !member.user.bot).size}`,
      `**Bots:** ${members.filter((member) => member.user.bot).size}`,
      `**Text Channels:** ${
        channels.filter((channel) => channel.type === "text").size
      }`,
      `**Voice Channels:** ${
        channels.filter((channel) => channel.type === "voice").size
      }`,
      `**Boost Count:** ${message.guild.premiumSubscriptionCount || "0"}`,
      "\u200b",
    ])
    .addField("Presence", [
      `**Online:** ${
        message.guild.members.cache.filter(
          (member) => member.presence.status === "online"
        ).size
      }`,
      `**Idle:** ${
        message.guild.members.cache.filter(
          (member) => member.presence.status === "idle"
        ).size
      }`,
      `**Do Not Disturb:** ${
        message.guild.members.cache.filter(
          (member) => member.presence.status === "dnd"
        ).size
      }`,
      `**Offline:** ${
        message.guild.members.cache.filter(
          (member) => member.presence.status === "offline"
        ).size
      }`,
      "\u200b",
    ])

    .addField(`Roles [${roles.length}]`, roles.join(", "))
    .setFooter(
      "Made with ❤️ by Bhuvnesh",

      "https://i.ibb.co/jG3Gffy/dsa.jpg"
    );

  message.channel.send(Embed);
}
module.exports = info;
