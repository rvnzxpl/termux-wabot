const help = (pushname, prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.1
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ ${prefix}info
┠≽ ${prefix}blocklist
╿
┷┯ *〈 MAKER 〉*
   ╽
   ┠≽ ${prefix}sticker
   ┠≽ ${prefix}toimg
   ╿
┯┷ *〈 GROUP 〉*
╽
┠≽ ${prefix}tagall
┠≽ ${prefix}tagall2
┠≽ ${prefix}tagall3
┠≽ ${prefix}add 628885xxxxxx
┠≽ ${prefix}kick @tag
┠≽ ${prefix}promote @tag
┠≽ ${prefix}demote @tag
┠≽ ${prefix}listadmins
┠≽ ${prefix}simih 1/0
┠≽ ${prefix}welcome 1/0
╿
┷┯ *〈 OTHER 〉*
   ╽
   ┠≽ ${prefix}wait
   ╿ *${ownerName},*
   ╰╼≽ *Developer © ${botName}*`
}
exports.help = help
