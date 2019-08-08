const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

                    

const prefix = '#';

client.on('ready', () => {

  
    console.log(`Logged in as [ elbop]`);

});

















const adminprefix = "#";
const developers = ['493103326179622933'];

console.log("elbop");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})


client.on('message', message => {//// حقوق @! elbop
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark:  تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "باي")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark:  تَم تغيير الليسينينق الى   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(`**:white_check_mark:  تم تغييرك حالتك بالتويتش الى   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**:white_check_mark:  جاري تغيير الأسم لـ ..${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**:white_check_mark:  جاري تغيير الأفتار... :** `);
}
});








































client.login("mfa.yJW0GMf-aOODP47hDXVRRQ-rq77o8n40KBCXYrHYL1xMAZA8VvThEQFCBXHMuEXvfFw18zFp9y510qmCfI9c");
