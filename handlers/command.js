const {readdirSync} = require("fs")

module.exports = (client) => {
  const dirs = readdirSync("./commands/")
  
  client.logger.log(`Loading ${dirs.length} directories.`)
  
  dirs.forEach(async (dir) => {
		const commands = await readdirSync("./commands/"+dir+"/");
    
		commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
      
			const response = client.loadCommand("./commands/"+dir, cmd);
			if(response){
				client.logger.log(response, "error");
			}
		});
	});
}