const prefix = "."

const botName = "IZANA MD"
const ownerName = "Dev Izana"
const ownerNumber = "221708407025"

function getBody(m) {
return (
m.message?.conversation ||
m.message?.extendedTextMessage?.text ||
m.message?.imageMessage?.caption ||
m.message?.videoMessage?.caption ||
""
)
}

function parseCommand(m) {

const body = getBody(m)

if (!body.startsWith(prefix)) return null

const args = body.slice(prefix.length).trim().split(/ +/)
const command = args.shift().toLowerCase()

return {
command,
args,
body
}

}

function isOwner(sender) {
return sender.includes(ownerNumber)
}

module.exports = {
prefix,
botName,
ownerName,
ownerNumber,
getBody,
parseCommand,
isOwner
}
