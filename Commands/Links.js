
function sendLink(message){

    const [...args] = message.content
            .split(/\s+/);

        if (args[1] === 'SinglyLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/vcQIFT79_50');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/vyUh8brE7is');
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/Ovhj6qDSF9M');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/JdQeNxWCguQ?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/UADuKgCraaY?list=RDCMUC63URkuUvnugRBeTNqmToKg');
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/ZlNKNSz88Nk');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/HMkdlu5sP4A');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/t8lyrfPStN0');
        }
        else if (args[1] === 'CircularLL' && args[3] === 'Java') {
            message.channel.send('https://youtu.be/5XJGIDonHg4?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'C++') {
            message.channel.send('https://youtu.be/F1F2imiOJfk?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
            message.channel.send('https://youtu.be/sFVxsglODoo?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Python') {
            message.channel.send('https://youtu.be/AKO9nI4tuhs');
        }
        else if (args[1] === 'StackByArray' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/AzMA2ldkt-w?list=PLmYZBLBTiVwkgU5A89eVe7GHboEWcYElO');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/Ebq7QUPaU7I');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'Python' ) {
            message.channel.send('https://youtu.be/K9LHxuE_Jrc');
        }
        else if (args[1] === 'StackByLL' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/b-MB4FcrTHs');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/fbonDkYsKj0');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'Python' ) {
            message.channel.send('https://youtu.be/pWnH4Q3eMKI');
        }
        else if (args[1] === 'QueueByArray' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/T0qUiI_L7S8');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/Yi8Im4_eSQI?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'Python' ) {
            message.channel.send('Sorry! This is unavailable but you can learn the concept in other language and try to code yourself!');
        }
        else if (args[1] === 'QueueByLL' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/Bf-P7TGD6QU');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/iEwX3XA5SDo?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'Python' ) {
            message.channel.send('Sorry! This is unavailable but you can learn the concept in other language and try to code yourself!');
        }
        else if (args[1] === 'QueueByStack' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/Mh8Dc8Fk-3E');
        }
        
        else if (args[1] === 'CircularQueue' && args[3] === 'C++' ) {
            message.channel.send('https://youtu.be/eKxWdc1DVFE');
        }
        else if (args[1] === 'CircularQueue' && args[3] === 'Python' ) {
            message.channel.send('https://youtu.be/VFSUWEAFmy4');
        }
        else if (args[1] === 'CircularQueue' && args[3] === 'Java' ) {
            message.channel.send('https://youtu.be/lPdSHEh8LiU');
        }

}

module.exports=sendLink;