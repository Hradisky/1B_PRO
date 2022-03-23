let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "/ping") {
  message.channel.send("pong")
}
})

client.login("Nzg2ODU4MDkwNzgyNzg1NTY2.X9Mgsw.hKcY0hkHoOsc0BF7OhJUFPIHbiM")

client.on("message", message => {
if(message.content === "/rozvrh") {
  message.channel.send("https://cdn.discordapp.com/attachments/786506212543561738/786506937226756096/unknown.png")
}
})

client.on("message", message => {
if(message.content === "/pong") {
  message.channel.send("ping")
}
})

client.on("message", message => {
if(message.content === "/pingpong") {
  message.channel.send("https://i.pinimg.com/originals/47/91/e7/4791e79bd845379bbbe5f4972cc10174.gif")
}
})

client.on("message", message => {
if (message.content === '/fruits') {
	Promise.all([
		message.react('🍎'),
		message.react('🍊'),
		message.react('🍇'),
	])
		.catch(() => console.error('One of the emojis failed to react.'));
}
})

client.on('message', msg=>{
    if(msg.content === "/help"){
         msg.reply('You are lucky person because this is only beta version of this bot. However we still have only a few command like /ping , /pong , /pingpong , /rozvrh , /fruits');
    }
})

client.on("message", message => {
if(message.content === "/play") {
  message.channel.send("Still in construction, Ver 1.0")
}
})

client.on("message", message => {
  if(message.content === "/pirateserials") {
  message.channel.send("Don't pirate games, but serials IDK try typing /iwantthesimpsons  3>")
}
})

client.on("message", message => {
  if(message.content === "/iwantthesimpsons") {
    message.channel.send("01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100001 01100100 01101111 01100010 01100101 00101110 01101100 01111001 00101111 00110011 01100001 00110101 01000010 01100100 01000111 01111010 ")
                         }
})

client.on("message", message => {
  if(message.content === "/annoy") {
    message.channel.send("2+2=4 or not? idk.")
    message.channel.send("Albert Einstein was not a inteligent person.")
  }
})

client.on("message", message => {
if(message.content === "/clearchat 100") {
  message.channel.bulkDelete(100)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
  message.channel.send("Chat cleared");
}
})

client.on("message", message => {
  if(message.content === "/clearchat 50") {
    message.channel.bulkDelete(50)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
    message.channel.send("Chat cleared");
  }
})

client.on("message", message => {
  if(message.content === "/info") {
    message.channel.send("This bot was made by BrMaster when he was bored, so he opened a simple node.js file and started typing, now the bot isn't still released to public because it has really big issues with permissions. Build 1.0")
  }
})
///////////////////////////////////////////////////////////
client.on("message", message => {
if(message.content ==="/coinflip")
{
      function doRandHT() {
var rand = ['Hlava','Orol'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Je to`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });
}
})
/////////////////Clear Chat//////////////////////////////////

client.on("message", message => {
  if(message.content === "/clearchat 1000") {
    message.channel.bulkDelete(1000)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
 message.channel.send("Chat cleared");
  }
})

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
