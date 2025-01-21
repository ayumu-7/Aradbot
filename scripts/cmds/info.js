module.exports.
config = {
	name: "info",
	version: "1.0.1", 
	role: 0,
	author: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info",
	category: "info",
	cooldowns: 1,
	dependenciesl: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.onStart = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg", 
            
            "https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg", 
            
            "https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg",

            "https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg",
       
              "https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg",

                    "https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg",

"https://i.postimg.cc/GmXDhXZ5/1000017283-01.jpg",
            
            ""];
  
var callback = () => api.sendMessage({body:`┏━━━━﷽﷽━━━━┓
 ﷽𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚ikum ﷽
┗━━━━﷽﷽━━━━┛🌺💚𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 
________________________________________

❇️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}

❇️𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 :  『 一 ཐི༏ཋྀ 𝚁𝙰𝙺𝙸𝙱 ཐི༏ཋྀ一₳Ɽ₳Đ』 

❇️𝐀𝐃𝐃𝐑𝐄𝐒 : •𝙲𝙷𝙾𝚃𝚃𝙾𝙶𝚁𝙰𝙼

_____________𝐂𝐎𝐍𝐓𝐀𝐂𝐓_____________

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 : https://www.facebook.com/anbirarad69

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 2 :
https://www.facebook.com/RAKIB.404X

❇️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.GoatBot.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : YO-一 ཐི༏ཋྀ𝚁𝚁𝙰𝙺𝙸𝙱 ₳Ɽ₳Đ ཐི༏ཋྀ一-}⛱️✨

𝐎𝐓𝐇𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍 

➟ 𝐔𝐏𝐓𝐈𝐌𝐄

𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄 : ${juswa} 

𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 ${hours}:${minutes}:${seconds}.

𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆  ${global.GoatBot.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
