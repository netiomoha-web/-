// antibadword.js – gestion erreur commandes
const prefix = "."
const ownerName = "DEV IZANA"
const ownerNumber = "221708407025"

// liste des commandes valides
const commandsList = [
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

export default async function antibadword(sock, m) {
  if (!m.message) return

  const from = m.key.remoteJid
  const body =
    m.message.conversation ||
    m.message.extendedTextMessage?.text ||
    m.message.imageMessage?.caption ||
    m.message.videoMessage?.caption ||
    ""

  // si ce n’est pas une commande, on ignore
  if (!body.startsWith(prefix)) return

  const args = body.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  // si la commande est valide, on ne fait rien ici
  if (commandsList.includes(command)) return

  // sinon, avertissement commande inconnue
  await sock.sendMessage(from, {
    text: `❌ Commande inconnue : "${prefix}${command}"\nTape ${prefix}menu pour voir toutes les commandes disponibles.`,
  }, { quoted: m })
}
