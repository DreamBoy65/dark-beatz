const Bot = require("./struct/client")
const Player = require("./struct/Player")

const client = new Bot()

client.player = new Player(client, {})

client.player.on("ready", () => {
  console.log("Lol")
})
require('events').EventEmitter.prototype._maxListeners = 70;

require('events').defaultMaxListeners = 70;

['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.login(client.config.bot.token)