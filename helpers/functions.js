module.exports = {

  checkPerms(message, cmd){
   if(!cmd.name || !cmd.description || !cmd.usage) throw new Error("Loding Error: " + cmd.name)
   
   if(cmd.perms[0]){
     cmd.perms.forEach(p => {
       if(!message.member.permissions.has(p)) return message.error("You dont have enough Permissions:\n"+cmd.perms.map(c => `• ${c}`).join("\n"))
     })
   }
   
   
  }
}