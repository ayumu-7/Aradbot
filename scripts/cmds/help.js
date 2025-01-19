fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 𝗔 𝗥 𝗔 𝗗]"; 

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "ArYan",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "╭───────❁";

      msg += `\n│𝗥𝗔𝗞𝗜𝗕 𝗛𝗘𝗟𝗣 𝗟𝗜𝗦𝗧\n╰────────────❁`; 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n╭─────✰『  ${category.toUpperCase()}  』`;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 2).map((item) => `⭔${item}`);
            msg += `\n│${cmds.join(" ".repeat(Math.max(1, 5 - cmds.join("").length)))}`;
          }

          msg += `\n╰────────────✰`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n\n╭─────✰[𝗘𝗡𝗝𝗢𝗬]\n│>𝗧𝗢𝗧𝗔𝗟 𝗖𝗠𝗗𝗦: [${totalCommands}].\n│𝗧𝗬𝗣𝗘𝖳:[ ${prefix}𝗛𝗘𝗟𝗣 𝗧𝗢\n│<𝗖𝗠𝗗> 𝗧𝗢 𝗟𝗘𝗔𝗥𝗡 𝗧𝗛𝗘 𝗨𝗦𝗔𝗚𝗘.]\n╰────────────✰`;
      msg += ``;
      msg += `\n╭─────✰\n│ ♥︎╣[❉𝗔 𝗥 𝗔 𝗗❉]╠♥︎\n╰────────────✰`; 

 				const helpListImages = [ "https://i.imgur.com/FzXndWg.jpeg" ];


      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage)
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `
  ╭───⊙
  │ 🔶 ${configCommand.name}
  ├── INFO
  │ 📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${longDescription}
  │ 👑 𝗔𝘂𝘁𝗵𝗼𝗿: ${author}
  │ ⚙ 𝗚𝘂𝗶𝗱𝗲: ${usage}
  ├── USAGE
  │ 🔯 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ${configCommand.version || "1.0"}
  │ ♻𝗥𝗼𝗹𝗲: ${roleText}
  ╰────────────⊙`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
} customLang = require(pathCustomLang);

 const { threadID } = event;
 const threadData = await threadsData.get(threadID);
 const prefix = getPrefix(threadID);
 let sortHelp = threadData.settings.sortHelp || "category";
 if (!["category", "name"].includes(sortHelp))
 sortHelp = "name";
 const commandName = (args[0] || "").toLowerCase();
 const command = commands.get(commandName) || commands.get(aliases.get(commandName));

 // ———————————————— LIST ALL COMMAND ——————————————— //
 if (!command && !args[0] || !isNaN(args[0])) {
 const arrayInfo = [];
 let msg = "";
 if (sortHelp == "name") {
 const page = parseInt(args[0]) || 1;
 const numberOfOnePage = 30;
 for (const [name, value] of commands) {
 if (value.config.role > 1 && role < value.config.role)
 continue;
 let describe = name;
 let shortDescription;
 const shortDescriptionCustomLang = customLang[name]?.shortDescription;
 if (shortDescriptionCustomLang != undefined)
 shortDescription = checkLangObject(shortDescriptionCustomLang, langCode);
 else if (value.config.shortDescription)
 shortDescription = checkLangObject(value.config.shortDescription, langCode);
 if (shortDescription)
 describe += `: ${cropContent(shortDescription.charAt(0).toUpperCase() + shortDescription.slice(1))}`;
 arrayInfo.push({
 data: describe,
 priority: value.priority || 0
 });
 }

 arrayInfo.sort((a, b) => a.data - b.data); // sort by name
 arrayInfo.sort((a, b) => a.priority > b.priority ? -1 : 1); // sort by priority
 const { allPage, totalPage } = global.utils.splitPage(arrayInfo, numberOfOnePage);
 if (page < 1 || page > totalPage)
 return message.reply(getLang("pageNotFound", page));

 const returnArray = allPage[page - 1] || [];
 const startNumber = (page - 1) * numberOfOnePage + 1;
 msg += (returnArray || []).reduce((text, item, index) => text += `✵${index + startNumber}${index + startNumber < 10 ? " " : ""}. 「${item.data}」\n`, '').slice(0, -1);
 await message.reply(getLang("help", msg, page, totalPage, commands.size, prefix, doNotDelete));
 }
 else if (sortHelp == "category") {
 for (const [, value] of commands) {
 if (value.config.role > 1 && role < value.config.role)
 continue; // if role of command > role of user => skip
 const indexCategory = arrayInfo.findIndex(item => (item.category || "NO CATEGORY") == (value.config.category?.toLowerCase() || "NO CATEGORY"));

 if (indexCategory != -1)
 arrayInfo[indexCategory].names.push(value.config.name);
 else
 arrayInfo.push({
 category: value.config.category.toLowerCase(),
 names: [value.config.name]
 });
 }
 arrayInfo.sort((a, b) => (a.category < b.category ? -1 : 1));
 arrayInfo.forEach((data, index) => {
 const categoryUpcase = `${index == 0 ? `╭──⦿` : `╭──⦿ `}【 ${data.category.toUpperCase()} ${index == 0 ? "】" : "】"}`;
 data.names = data.names.sort().map(item => item = `✧${item}`);
 msg += `${categoryUpcase}\n${data.names.join(" ")}\n╰────────⦿\n`;
 });
 message.reply(getLang("help2", msg, commands.size, prefix, doNotDelete));
 }
 }
 // ———————————— COMMAND DOES NOT EXIST ———————————— //
 else if (!command && args[0]) {
 return message.reply(getLang("commandNotFound", args[0]));
 }
 // ————————————————— INFO COMMAND ————————————————— //
 else {
 const formSendMessage = {};
 const configCommand = command.config;

 let guide = configCommand.guide?.[langCode] || configCommand.guide?.["en"];
 if (guide == undefined)
 guide = customLang[configCommand.name]?.guide?.[langCode] || customLang[configCommand.name]?.guide?.["en"];

 guide = guide || {
 body: ""
 };
 if (typeof guide == "string")
 guide = { body: guide };
 const guideBody = guide.body
 .replace(/\{prefix\}|\{p\}/g, prefix)
 .replace(/\{name\}|\{n\}/g, configCommand.name)
 .replace(/\{pn\}/g, prefix + configCommand.name);

 const aliasesString = configCommand.aliases ? configCommand.aliases.join(", ") : getLang("doNotHave");
 const aliasesThisGroup = threadData.data.aliases ? (threadData.data.aliases[configCommand.name] || []).join(", ") : getLang("doNotHave");

 let roleOfCommand = configCommand.role;
 let roleIsSet = false;
 if (threadData.data.setRole?.[configCommand.name]) {
 roleOfCommand = threadData.data.setRole[configCommand.name];
 roleIsSet = true;
 }

 const roleText = roleOfCommand == 0 ?
 (roleIsSet ? getLang("roleText0setRole") : getLang("roleText0")) :
 roleOfCommand == 1 ?
 (roleIsSet ? getLang("roleText1setRole") : getLang("roleText1")) :
 getLang("roleText2");

 const author = configCommand.author;
 const descriptionCustomLang = customLang[configCommand.name]?.longDescription;
 let description = checkLangObject(configCommand.longDescription, langCode);
 if (description == undefined)
 if (descriptionCustomLang != undefined)
 description = checkLangObject(descriptionCustomLang, langCode);
 else
 description = getLang("doNotHave");

 let sendWithAttachment = false; // check subcommand need send with attachment or not

 if (args[1]?.match(/^-g|guide|-u|usage$/)) {
 formSendMessage.body = getLang("onlyUsage", guideBody.split("\n").join("\n✵"));
 sendWithAttachment = true;
 }
 else if (args[1]?.match(/^-a|alias|aliase|aliases$/))
 formSendMessage.body = getLang("onlyAlias", aliasesString, aliasesThisGroup);
 else if (args[1]?.match(/^-r|role$/))
 formSendMessage.body = getLang("onlyRole", roleText);
 else if (args[1]?.match(/^-i|info$/))
 formSendMessage.body = getLang("onlyInfo", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "");
 else {
 formSendMessage.body = getLang("getInfoCommand", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "", `${guideBody.split("\n").join("\n»")}`);
 sendWithAttachment = true;
 }

 if (sendWithAttachment && guide.attachment) {
 if (typeof guide.attachment == "object" && !Array.isArray(guide.attachment)) {
 const promises = [];
 formSendMessage.attachment = [];

 for (const keyPathFile in guide.attachment) {
 const pathFile = path.normalize(keyPathFile);

 if (!fs.existsSync(pathFile)) {
 const cutDirPath = path.dirname(pathFile).split(path.sep);
 for (let i = 0; i < cutDirPath.length; i++) {
 const pathCheck = `${cutDirPath.slice(0, i + 1).join(path.sep)}${path.sep}`; // create path
 if (!fs.existsSync(pathCheck))
 fs.mkdirSync(pathCheck); // create folder
 }
 const getFilePromise = axios.get(guide.attachment[keyPathFile], { responseType: 'arraybuffer' })
 .then(response => {
 fs.writeFileSync(pathFile, Buffer.from(response.data));
 });

 promises.push({
 pathFile,
 getFilePromise
 });
 }
 else {
 promises.push({
 pathFile,
 getFilePromise: Promise.resolve()
 });
 }
 }

 await Promise.all(promises.map(item => item.getFilePromise));
 for (const item of promises)
 formSendMessage.attachment.push(fs.createReadStream(item.pathFile));
 }
 }

 return message.reply(formSendMessage);
 }
 }
};

function checkLangObject(data, langCode) {
 if (typeof data == "string")
 return data;
 if (typeof data == "object" && !Array.isArray(data))
 return data[langCode] || data.en || undefined;
 return undefined;
}

function cropContent(content, max) {
 if (content.length > max) {
 content = content.slice(0, max - 3);
 content = content + "...";
 }
 return content;
 };
