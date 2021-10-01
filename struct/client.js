const {Client, Collection, Intents} = require("discord.js")
const config = require("../config/config")
const path = require("path")
class Bot extends Client {
  constructor () {
    super({
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
				Intents.FLAGS.GUILD_VOICE_STATES,
				Intents.FLAGS.DIRECT_MESSAGES
			],
			allowedMentions: {
				parse: ["users"]
			}
		});
    //modules
   this.commands = new Collection()
   this.aliases = new Collection()
   this.logger = require("../helpers/logger")
    this.config = require("../config/config")
    this.functions = require("../helpers/functions")
  }
  //Functions
  
  //LoadCommands
  loadCommand(dir, cmd){
    try{
      const props = require(`.${dir}${path.sep}${cmd}`)
      this.commands.set(props.name, props)
      props.aliases.forEach(alias => {
        this.aliases.set(alias, props.name)
      })
      return false;
    } catch (e) {
      this.logger.log("Unable to load command : "+ cmd + "\n" + e, "error")
    }
  }

  //Events
}

module.exports = Bot;