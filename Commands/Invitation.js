const dm= require('./dm.js');

module.exports = async function (message) {
	message.author.send(dm);
}
