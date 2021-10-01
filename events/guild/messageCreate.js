module.exports = (client, message) => {
  if(message.author.bot) return;
  if(!message.guild) return;

  let prefix = null;
			client.config.bot.prefixes.forEach((p) => {
				if(message.content.startsWith(p) || message.content.toLowerCase().startsWith(p)){
					prefix = p;
				}
			});

  const args = message.content.slice((typeof prefix === "string" ? prefix.length : 0)).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  if(!cmd) return;

  client.functions.checkPerms(message, cmd)

  cmd.run(client, message, args)
}