alive.js




const config = require( ../config )
const {cmd , commands} = require( ../command )

cmd({
    pattern: "alive",
    desc: "sithuwa-md Check bot online or no.",
    category: "main",
    react: "💗",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HEY DEAR* ,${pushname}\n *🤍⃙̶💋::|  |:: 𝑺𝑰𝑻𝑯𝑼𝑾𝑨-𝑴𝑫::|𝑨𝑳𝑰𝑽𝑬|:: |𝑴𝑺𝑮| :: 𝑯𝑬𝑳𝑳𝑶 𝑶𝑾𝑵𝑬𝑹 𝑩𝒀 𝑪𝒀𝑩𝑨𝑹 𝑺𝑰𝑻𝑯𝑼𝑾𝑨....(මරන්නේ වදන් බලෙන් දැං එන්නේ හමුදාවක් ආරන් හුත්තෝ)::|  |::🤍⃙̶💋*,
*┏════════════❐*  *❐════════════┓*
*🤍🍒SITHUWA⊷❍═══❍⊷MD ALIVE MSG🍒🤍*
*┗════════════❐*  *❐════════════┛*

𝑺


𝑰


𝑻


𝑯


𝑼


𝑾


𝑨


-


𝑴


𝑫

*┏════════════❐*  *❐════════════┓*
*🤍🍒SITHUWA⊷❍═══❍⊷MD ALIVE MSG🍒🤍*
*┗════════════❐*  *❐════════════┛*,

╭═══⦀════⦀═════█┃❱❰⊷❍ 
┊
┊FOR MORE DETAILS = TYPE (*.alive*) 🔐
┊
╰═══⦀═════⦀════█┃❱❰⊷❍,

*- I AM SITHUWA-MD V2 WHATSAPP  BOT 🇦🇱*,

*┏════════════❐*  *❐════════════┓*
*🤍🍒SITHUWA⊷❍═══❍⊷MD ALIVE MSG🍒🤍*
*┗════════════❐*  *❐════════════┛*,

`> POWERED BY CYBAR SITHUWA🚩`,


return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/DPzq9NCw/IMG-20250206-WA0018.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
