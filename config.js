//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Gweru, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mildredtanyamashamba03:<password>@cluster0.38kkxv4.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Joshkingmd/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "263716729222";
global.owner = process.env.OWNER_NUMBER || "263716727222";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdTc2dndzBkYlFaZm8rV3ZtdFdoSlc3RDhTYVdoa0N1R2wyWEZRRmRuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWN0SUh6bmRvSUVvcEs1QllyU1BYb0VzOTZtQUVpSHF6R0tINTA0TDV3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SXVEbUhPYjdra3N6MnFCdERQZktYSXN4TGRyM21iZmJPS0dJNm9DcW1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0YU05L3BaaGlHYUdWcEpxaUMwbGJ1SlNWaUZBSHE4ZENSeXphNHNYMzFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BTzJvSnZSNWpDcUQwMDVhOU5seVRqU1U1WWl6b1liTkRDeHlTaDN2SDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJEUG9tSUZCQ0JNOExTTzdBQzR5REFleVE5RWdDU0w4YUx3NzNxdmZIeTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0p0azU4U3NDWWZjcXV2cHhDVGpiWXhNbWpjVnJuRm1wcG1FdThiREYwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVJDVjMvbzBleGg1aWVRekFLRDNhdkplSVY4VS9IbitLdm9MWEpVQkFoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMZ0twUmdscUM4NmNnNldnR3J6N0ptOUNFNjQ5aXVRN0RLT0F1NFBydXVMUUxTSE5Uc1pLbUx5aXM0Qmw5eGk3UzVrTFF6a3BpQlFIaUhISWtDUkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IkljdjB3SnFLZ0lnQ3lYVUE1NGxscmJtU0djZVNpODhVN0U2RGt0bGM5SFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imo4T0wzSHpBUXNTY3A1Yjk3MDZRZXciLCJwaG9uZUlkIjoiZDMwNmE1ODgtZDg4Yy00M2EwLWIyMjktNWIxZTY5OTBiNzFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind1bVMyWDVLRG43OXNwSnRWL0hQSWI1OE1WYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RDc1NlFGb1M4aFpNS3Z1MW0xUERtbFR0ck09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEpKTVFQNTEiLCJtZSI6eyJpZCI6IjI2MzcxNjcyOTIyMjozNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnoxNXVBREVNTzN5YlFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidmR2dUNUUnRydjBrejZWaXZQVWxZZHpaT1IvQkpXeEw3NXhuMVY5d3hVUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTDJrMzJmY3F6U3hJMkNBYjdybUwxUnhzQkdiUThKYk5NS1dMRkxyeEhzems4OU1ONGl4alhtUzJqUWtpbm9DWlp6N0NDZU9nTDk4NWtMR25oSTZYQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjFZODdYek5GU3N2ZHk4WnUvRGlwQ2FNSGNiM3NDSDV2M2ZWSG5vUFhmNUlKUDlXejlQdHV3a0Y4SjZQc1hXTlE4ZEhMdDVFNGhibDcySHBhcEdTRkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE2NzI5MjIyOjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIzYjdnazBiYTc5Sk0rbFlyejFKV0hjMlRrZndTVnNTKytjWjlWZmNNVkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4Njc3OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEJYIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Joshkingmd-V2™`",
  author: process.env.PACK_AUTHER || "Joshuamambo1",
  packname: process.env.PACK_NAME || "Joshkingmd",
  botname: process.env.BOT_NAME || "Joshkingmd",
  ownername: process.env.OWNER_NAME || "Joshuamambo1",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-db06e175-bfa5-4a64-a2be-f8f69a919625",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "joshuamambo1md",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
