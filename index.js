const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "-";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});
console.log("je suis prêt")
client.login("ODI0MjQ1OTQxMjE2NDc3MjI1.YFsk2g.d3UeiVnb_SeimHrQ_eG3wghQ62I");