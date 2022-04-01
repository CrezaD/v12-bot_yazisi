module.exports = {
    kod: "bot-yaz",
    async run (client, message, args) {
        let BotunYazısı = args.join(" ");
        if (!BotunYazısı) return message.react("❌")
        
        message.channel.send(BotunYazısı).then(message.delete()) //bu kod: Creza#9642 Tarafından Yazıldı
    }
}