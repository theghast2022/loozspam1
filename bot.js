const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "9";

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "511954249752641546"; // ايدي السررفر
var channel = "512707231930908673";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast, The_Ghast, The_Ghast , The_Ghast , The_Ghast , The_Ghast , The_Ghast , ')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login('NTEyNzEyMTA3OTI2NjE4MTI1.Ds9d-w.-MeCrzwnyPE8ARIa8q39h2D8QKw');
