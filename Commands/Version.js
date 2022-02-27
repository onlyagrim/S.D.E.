module.exports = async function (message) {
  message.reply(
    `S.D.E. is currently running on v${require("../package.json").version}`
  );
};
