// exif.js
module.exports = {
    // Infos principales du bot
    botName: "Izana MD",            // Nom du bot
    ownerName: "Dev Izana",         // Nom de l'owner
    ownerNumber: "+221708407025",   // Numéro de l'owner
    prefix: ".",                     // Préfixe des commandes

    // Liste de toutes les commandes disponibles
    commands: [
        "owner",
        "menu",
        "ping",
        "setprefix",
        "ban",
        "unban",
        "tagall",
        "kickall",
        "demote all",
        "promote",
        "demote",
        "hidetag",
        "play",
        "purge",
        "img",
        "search",
        "motivation"
    ],

    // Messages réutilisables
    messages: {
        welcome: "Bienvenue dans Izana MD Bot ! 🔥",
        onlyOwner: "⚠️ Cette commande est réservée à l'owner !",
        commandNotFound: "❌ Commande introuvable.",
        bannedUser: "🚫 Vous êtes banni et ne pouvez pas utiliser le bot.",
        setPrefixSuccess: "✅ Préfixe changé avec succès !",
        tagAllNotice: "📢 Tous les membres ont été tagués.",
        kickAllNotice: "👢 Tous les membres ont été expulsés.",
        promoteSuccess: "✅ Promotion effectuée !",
        demoteSuccess: "⚠️ Démotion effectuée !",
        hideTagNotice: "🙈 Mention cachée envoyée.",
        playNotice: "🎵 Lecture en cours...",
        purgeNotice: "🧹 Purge terminée.",
        imgNotice: "🖼️ Image générée.",
        searchNotice: "🔎 Résultat de recherche :",
        motivationNotice: "💡 Voici ta motivation du jour :"
    },

    // Méthode pour vérifier si un utilisateur est l'owner
    isOwner: function(number) {
        return number === this.ownerNumber;
    },

    // Méthode pour vérifier si une commande existe
    isCommand: function(cmd) {
        return this.commands.includes(cmd);
    },

    // Méthode pour récupérer un message type
    getMessage: function(type) {
        return this.messages[type] || "";
    },

    // Stockage temporaire pour bans ou autres (peut être remplacé par une DB)
    bannedUsers: [],

    // Méthode pour bannir un utilisateur
    banUser: function(number) {
        if(!this.bannedUsers.includes(number)) this.bannedUsers.push(number);
    },

    // Méthode pour unban un utilisateur
    unbanUser: function(number) {
        this.bannedUsers = this.bannedUsers.filter(u => u !== number);
    },

    // Vérifie si un utilisateur est banni
    isBanned: function(number) {
        return this.bannedUsers.includes(number);
    }
};
