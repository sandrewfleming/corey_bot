st axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

// AC: note, with modern JS it is more common to use 'let' instead of 'var'. This applies to ES6 code only... 
// but if you can use 'const' you can use 'let'
// 'let' signifies a variable which can change... 
// 'const' is kinda funny though. its not supposed to change, 
// but if const is an object, you can modify the fields inside that object
// i'll make these comments as long as I damn well please

// dont be afraid of whitespace... it makes things a lot more readable
// i usually put a newline around each logical "chunk"... this makes it
// easier to identify code that maybe deserves it's own function

// if isCorey(); resetBitchCount();
// message-count++ (cant find underscore on this KB)
// handleMessage(msg); // this does the msg count check, and just check for > 25, since you increment no matter what above


//define responses
let response = [
  'What are you blabbering about?',
  'You have exceeded the amount of messages that I will read, don\'t you guys have work to do?',
  'I\'m not reading all of this',
  'Do any of you have jobs?',
  '250 unread messsages, really?',
  'Man, these kids are so dumb, it surprises me that they are able to breathe',
  'Anyone wanna go throw some heavy shit around to some Nu-Metal at 4am?'
 ];


let message_count = 0;
let bitch_count = 0;


//define function to look for corey
function isCorey(msg) {
    return msg.member.displayName === 'blightcutter';
}



client.on('message', async msg => {
  //exclude messages from coreybot
  if(msg.author.bot) return;
 //when a msg from corey is received, reset bitch_count, message count and send message 
  if (isCorey(msg) && bitch_count > 0) {
      msg.channel.send("My work here is done. Corey, you missed " + message_count + "message!");
      bitch_count = 0;
      message_count = 0;
  }   
  
//increment message_count  
  message_count++;
  
//bitch and send how many times bot has bitched
  if(message_count++ % 50 === 0) {
    message_count = 0;
    msg.channel.send(response[Math.floor(Math.random() * response.length)]);
    bitch_count += 1;
    msg.channel.send("***I have now bitched " + bitch_count + " times!***");
  }
  
})
          
client.login(process.env.BOT_TOKEN)


//add command for bitch_count

//add a save for later tag function