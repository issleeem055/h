const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "8";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "523542777418743828"; // ايدي السررفر
var channel = "523544866840641536";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** islam . islam .islam .islam .islam .islam .islam .islam .islam .islam .islam .vislam .islam .islam .islam .islam .islam .islam .islam .islam .islam .vislam .islam .islam .islam .islam .islam .islam .islam .islam .islam .islam .islam .vislam .islam .islam .islam .islam .islam .islam .islam .islam .islam .islam .vislam .islam .islam .   **')
    },999);
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

 
client.login(process.env.BOT_TOKEN);