const Discord = require("discord.js");
const fetch = require("node-fetch");

function convertHMS(value) {
  const sec = parseInt(value, 10);
  hours = Math.floor(sec / 3600);
  minutes = Math.floor((sec - hours * 3600) / 60);
  if (hours >= 24) {
    days = hours / 24;
    hours = hours / 24;
    return days + " days " + hours + " hours " + minutes + " minutes ";
  }
  return hours + " hours " + minutes + " minutes ";
}

function convertToIST(value) {
  var s = new Date(value).toLocaleString(undefined, {
    timeZone: "Asia/Kolkata",
  });
  return s + " (IST)";
}

module.exports = async function (message) {
  const url = `https://kontests.net/api/v1/leet_code`;
  try {
    response = await fetch(url);
    const CR = await response.json();
    //   message.channel.send(CR);
    //   console.log(CR);
    for (let i = 0; i < CR.length; i++) {
      if (CR[i].status == "CODING") {
        CR[i].status = "🔴Live";
      } else {
        CR[i].status = "⚠️Upcoming";
      }
      // console.log(PR.includes(CR[i]));

      const Embed = new Discord.MessageEmbed()
        .setImage("https://leetcode.com/static/images/LeetCode_Sharing.png")
        .setColor("0x0099ff")
        .setTitle(`${CR[i].name}`)
        .setAuthor("DSA Bot", "https://i.ibb.co/HdBBqG1/mob-dark.png")
        .addFields(
          {
            name: `Status: ${CR[i].status}`,
            value: `[Link](${CR[i].url}) for contest`,
          },
          {
            name: "Start:",
            value: `${convertToIST(CR[i].start_time)}`,
          },
          {
            name: "End:",
            value: `${convertToIST(CR[i].end_time)}`,
          },
          {
            name: "Duration:",
            value: `${convertHMS(CR[i].duration)}`,
          }
        )
        .setFooter(
          `Made with ❤️ by Bhuvnesh`,
          "https://i.ibb.co/HdBBqG1/mob-dark.png"
        );
      message.channel.send(Embed);
    }
  } catch (error) {
    console.log(error);
    message.channel.send("Something went wrong :( ");
  }
};
