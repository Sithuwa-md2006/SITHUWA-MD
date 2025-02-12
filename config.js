
const fs = require( fs );
if (fs.existsSync( config.env )) require( dotenv ).config({ path:  ./config.env  });

function convertToBool(text, fault =  true ) {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MX9i1AhZ#54mrks2pcOajaodXFfHOeOxlY336D-0FN3OevDvtwGc",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/DPzq9NCw/IMG-20250206-WA0018.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *🤍⃙̶💋::|  |:: 𝑺𝑰𝑻𝑯𝑼𝑾𝑨-𝑴𝑫::|𝑨𝑳𝑰𝑽𝑬|:: |𝑴𝑺𝑮| :: 𝑯𝑬𝑳𝑳𝑶 𝑶𝑾𝑵𝑬𝑹 𝑩𝒀 𝑪𝒀𝑩𝑨𝑹 𝑺𝑰𝑻𝑯𝑼𝑾𝑨....(මරන්නේ වදන් බලෙන් දැං එන්නේ හමුදාවක් ආරන් හුත්තෝ*",
SUDO_NB: process.env.SUDO_NB || "94752902163",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true",
AUTO_STICKER:"true",
AUTO_REPLY:"true",
AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW || "true",
AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY || "true",
AUTO_STATUS_REPLY_MSG: process.env.AUTO_STATUS_REPLY_MSG || "𝑺𝑻𝑨𝑻𝑼𝑺 𝑹𝑬𝑬𝑫 𝑩𝒀 - 𝑺𝑰𝑻𝑯𝑼𝑾𝑨-𝑴𝑫🍏",
AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT ||"true",
AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "🍀 🚀 🍏 💗 😙 🐰 🐷 ☺️ 🐻 🍰 🍨 🍿 🇦🇫 🏵️ 🥇 🥉",
AUTO_REACT: toBool(process.env.AUTO_REACT || "true",
AUTO_READ_MSG: toBool(process.env.AUTO_READ_MSG || "true",
ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE || "true",
AUTO_CALL_REJECT: toBool(process.env.AUTO_CALL_REJECT || "true",
AUTO_CALL_REJECT_MSG: process.env.AUTO_CALL_REJECT_MSG || "ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴄᴀʟʟ ʙʟᴏᴄᴋɪɴɢ*\n\nꜱᴏʀʀʏ ᴄᴀʟʟꜱ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ\n\nᴘʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀ ᴛᴇxᴛ ᴍᴇꜱꜱᴀɢᴇ/ᴠᴏɪᴄᴇ ᴍᴇꜱꜱᴀɢᴇ\n\n> ᴋɪɴɢ ᴀʙɪʏᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"
};

*
