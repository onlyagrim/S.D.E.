const fetch = require('node-fetch');

module.exports = async function (message) {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(results,true);
        });
    }
    else{
        message.channel.send('Sorry! You don`t have permission to use this command.')
    }
}
