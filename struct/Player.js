const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const {EventEmitter} = require("events")
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');

class Player extends EventEmitter {
  constructor (client, options = {}){
    super({})
    this.client = client;
    this.options = options;
  }
  async play(name, message){
      const connection = joinVoiceChannel({
	channelId: message.member.voice.channel.id,
	guildId: message.channel.guild.id,
	adapterCreator: message.channel.guild.voiceAdapterCreator,
});
    
   let song = await ytsr(name, {limit: 1, safeSearch: true})

   console.log(song)

   if(!song) return this.emit("noResult", name)

   const stream  = ytdl(song.items[0].url, {filter: 'audioonly'});

    const resource = createAudioResource(stream, {
      inlineVolume: true
    })
    const player = createAudioPlayer()

    player.play(resource)

    connection.subscribe(player)

  }
}

module.exports = Player;