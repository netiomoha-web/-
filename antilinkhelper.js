const prefix = "."

const antiLinkGroups = new Set()

const allowedCommands = [
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

function enableAntiLink(groupId) {
antiLinkGroups.add(groupId)
}

function disableAntiLink(groupId) {
antiLinkGroups.delete(groupId)
}

function isAntiLinkEnabled(groupId) {
return antiLinkGroups.has(groupId)
}

async function handleAntiLink(sock, m) {

try {

const from = m.key.remoteJid

const body =
m.message?.conversation ||
m.message?.extendedTextMessage?.text ||
""

if (!from.endsWith("@g.us")) return

if (!isAntiLinkEnabled(from)) return

// Ignore les commandes
if (body.startsWith(prefix)) {

const command = body.slice(prefix.length).split(" ")[0].toLowerCase()

if (allowedCommands.includes(command)) return
}

// Detecter lien whatsapp
if (body.includes("chat.whatsapp.com")) {

const sender = m.key.participant

await sock.sendMessage(from, {
text: "🚫 Lien WhatsApp interdit dans ce groupe."
}, { quoted: m })

await sock.groupParticipantsUpdate(
from,
[sender],
"remove"
)

}

} catch (err) {
console.log("AntiLink Error:", err)
}

}

module.exports = {
enableAntiLink,
disableAntiLink,
isAntiLinkEnabled,
handleAntiLink
}
