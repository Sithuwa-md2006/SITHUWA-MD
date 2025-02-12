const {cmd , commands} = require( ../command )

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ*
🔥 *ɴᴜᴍʙᴇʀ* -: 94752902163
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:https://whatsapp.com/channel/0029Vaxfjb1HrDZWrPQZs51Z* 

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/DPzq9NCw/IMG-20250206-WA0018.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
