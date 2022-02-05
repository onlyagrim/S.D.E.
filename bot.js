require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");

const command = require("./Commands/Command.js");
const help = require("./Commands/help.js");
const invitationmsg = require("./Commands/Invitation.js");
const topics = require("./Commands/topic.js");
const cc = require("./Commands/cc.js");
const serverinfo = require("./Commands/Serverinfo.js");
const SendCode = require("./Commands/Links.js");
const version = require("./Commands/Version");
const Meme = require("./Commands/Meme");

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);

  command(client, ["cc", "clearchannel"], (message) => {
    cc(message);
  });

  client.user.setPresence({
    activity: {
      name: `'+' for help`,
      type: 0,
    },
  });

  command(client, ["Meme", "meme"], (message) => {
    Meme(message);
  });

  command(client, "topics", (message) => {
    message.channel.send(topics);
  });

  command(client, "serverInfo", (message) => {
    serverinfo(message);
  });

  command(client, "serverCount", (message) => {
    let serverlist = 0;
    client.guilds.cache.forEach((guild) => {
      serverlist += 1;
    });
    message.channel.send(
      "DSA-Bot is currently running in " + serverlist + " servers!!"
    );
  });

  command(client, "invite", (message) => {
    invitationmsg(message);
  });

  command(client, "version", (message) => {
    version(message);
  });

  command(client, "code", (message) => {
    SendCode(message);
  });

  command(client, "", (message) => {
    message.channel.send(help);
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
