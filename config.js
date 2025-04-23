const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // === Bot Identity & Appearance ===
    BOT_NAME: process.env.BOT_NAME || "שคlк๏гค",
    STICKER_NAME: process.env.STICKER_NAME || "שคlк๏гค",
    PREFIX: process.env.PREFIX || ".",
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://raw.githubusercontent.com/coderxsa/BOT-ASSETS/refs/heads/main/Valkoraa/voice/Pic/valkora.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/coderxsa/BOT-ASSETS/refs/heads/main/Valkoraa/voice/Pic/valkora.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> Hello *שคlк๏гค*⚡",
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ CODERXSA*",

    // === Owner Info ===
    OWNER_NAME: process.env.OWNER_NAME || "CODERXSA",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "27717311486",
    DEV: process.env.DEV || "27717311486",

    // === Session & Mode ===
    SESSION_ID: process.env.SESSION_ID || "",
    MODE: process.env.MODE || "public",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",

    // === Auto Features ===
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY שคlк๏гค 🤍*",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

    // === Read & Reaction Settings ===
    READ_MESSAGE: process.env.READ_MESSAGE || "true",
    READ_CMD: process.env.READ_CMD || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",

    // === Anti Features ===
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_VV: process.env.ANTI_VV || "true",

    // === Mention & Status ===
    MENTION_REPLY: process.env.MENTION_REPLY || "false",

    // === Links & Deletion ===
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log"
};
