//called on message by bot.js
module.exports = (client, msg) => {
    if(msg.author.bot) return;
    const input = msg.content.toLowerCase()
    if (input.startsWith('!roleOff')) {
        //check user that sent message's permissions
        //if valid, toggle ability to assign roles to off
    }
    if (input.startsWith('!roleOn')) {
        //check user that sent message's permissions
        //if valid, toggle ability to assign roles to on
    }
    if(input.startsWith('!role')){
        //strip role name argument, pass to assign
    }


}


function validPrivilege(user, guild){
    // guild.fetchMember(user).hasPermission()
}
