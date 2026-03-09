const commands = [
"owner",
"menu",
"ping",
"setprefix",
"ban",
"unban",
"tagall",
"kickall",
"demoteall",
"promote",
"demote",
"hidetag",
"play",
"purge",
"img",
"search",
"motivation"
]

module.exports = async (sock, msg, prefix) => {

const message = msg.message?.conversation || 
msg.message?.extendedTextMessage?.text

if(!message) return

if(!message.startsWith(prefix)) return

const cmd = message.slice(prefix.length).split(" ")[0].toLowerCase()

if(!commands.includes(cmd)){

await sock.sendMessage(msg.key.remoteJid,{
text:`❌ Commande inconnue

📌 Tape *${prefix}menu* pour voir toutes les commandes.`
})

}

}
