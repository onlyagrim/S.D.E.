module.exports = async function (message) {
  message.reply(
    `DSA-Bot is currently running on v${require("../package.json").version}`
  );
};
