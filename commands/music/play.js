module.exports = {
  name: "play",
  aliases: [],
  description: "play music.",
  usage: "play [name/URL]",
  perms: [],
  clientPerms: [],
  run: async(client, message, args)=>{
    client.player.play(args.join(" "), message)
  }
}