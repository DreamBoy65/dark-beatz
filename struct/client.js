const {Client, Collection, Intents} = require("discord.js")

class Client {
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
   this.logger = require(".. /helpers/logger")
  }
  //Functions

  //Login
  login(){
    this.login(process.env.TOKEN)
  }
  
  //LoadCommands
  loadCommands(dir, cmd){
    try{
			const props = require(`.${commandPath}${path.sep}${commandName}`)
      this.commands.set(props.name, props)
      props.aliases.forEach(alias => {
        this.aliases.set(alias, props.name)
      })
      return false;
    } catch (e) {
      this.logger.log("Unable to load command : "+ cmd, "error")
    }
  }

  //Events
}