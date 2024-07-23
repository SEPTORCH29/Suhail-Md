const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_32_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDMHd2MDBBcThHWGg5a0ZiZCt5UHo4M1pTUllXUHc5b3Q3V3p2TDFtdDFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNDc5NDM3MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMzREM4NTlDMUNCQUZEMTE4REYxMkY1RTJEQkU0MTY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcyMzU1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6RUY3bnNnWVFiQ0Z0VTE5QU1TYmZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyYWM2NGEwLTExMzAtNDlkMC1hYjgyLWZkZjZjNTAxNGYyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDI0LFxuICAgICAgMjI0LFxuICAgICAgMzIsXG4gICAgICAyMjIsXG4gICAgICAxNTcsXG4gICAgICAxMDMsXG4gICAgICAxNTksXG4gICAgICAxNjAsXG4gICAgICAyNDIsXG4gICAgICAyMDgsXG4gICAgICAxNTgsXG4gICAgICAxMTMsXG4gICAgICAxMDksXG4gICAgICAxNjQsXG4gICAgICAxOTksXG4gICAgICAxNjQsXG4gICAgICAxMDAsXG4gICAgICAxMjcsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMDIsXG4gICAgICAzNyxcbiAgICAgIDE4LFxuICAgICAgOTIsXG4gICAgICAxNzgsXG4gICAgICAxNSxcbiAgICAgIDE2OCxcbiAgICAgIDc3LFxuICAgICAgMTc3LFxuICAgICAgNDUsXG4gICAgICAyLFxuICAgICAgMTA2LFxuICAgICAgODksXG4gICAgICAyNTUsXG4gICAgICAxMDYsXG4gICAgICA1NCxcbiAgICAgIDIzNCxcbiAgICAgIDE3MyxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSOTZSUTUzOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0Nzk0MzczNzo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDE1MTEwMDk5NzIzNzU6ODJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1dGNExJREVKclYvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3WFhPbi93clFZeEhuRU5HUzRaSDVHZThDTGRNSVJGeVRqbTFLL0xmWkY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAwZlllQnBvazRWdCtRcGVKUUo3akZqMU93cVBOelFVa09RSGZVVWdKZTVaekpMRVhEd2FMeE5DVmk5cFlQRnlmTlNyU2RvazZjZnBSdzY2WlBLRkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFPU0ZwcEpEa0ltWUxoTmFTcnR0dUlqWGdQZmV0MzlzOStOSnVVU05OejZvaHJPUzJmbUNVSXYwSWdhNnFOc2FQWXFPYnNaMHo1aERUOU9tUTlTQ2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDc5NDM3Mzc6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcyMzU1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE4SlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQThKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGpKK3VnbkkyLzJWQ01QM253N2gzeGtJN3VVQUx4MHRHNUllMXVGQWtFYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTE3Mzc1NjgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyOTI0ODUxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
