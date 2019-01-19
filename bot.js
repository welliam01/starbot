const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const sw = JSON.parse(fs.readFileSync(`./setwlc.json`, `utf8`))

const prefix = ","



client.on('message', message => {

          if (!message.content.startsWith(prefix)) return;
          var args = message.content.split(' ').slice(1);
          var argresult = args.join(' ');
          if (message.author.id == 470451682417967116) return;


        if (message.content.startsWith(prefix + 'playing')) {
        if (message.author.id !== '465110270939889665') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setGame(argresult);
            message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
        } else


        if (message.content.startsWith(prefix + 'streem')) {
        if (message.author.id !== '465110270939889665') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
            message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
        } else

        if (message.content.startsWith(prefix + 'setname')) {
        if (message.author.id !== '465110270939889665') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
          client.user.setUsername(argresult).then
              message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
          return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
        } else

        if (message.content.startsWith(prefix + 'setavatar')) {
        if (message.author.id !== '465110270939889665') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setAvatar(argresult);
            message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else


        if (message.content.startsWith(prefix + 'watching')) {
        if (message.author.id !== '465110270939889665') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
            client.user.setActivity(argresult, {type : 'watching'});
         message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
        }

         });


client.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
      let p = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!p[message.guild.id]) p[message.guild.id] = {
        prefix: ","
    }
      fs.writeFile("./prefixes.json", JSON.stringify(p), (err) => {
    if (err) console.log(err)
  });
    const prefix = p[message.guild.id].prefix
    if (message.content.startsWith(prefix + "setprefix")) {
        if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        let newPrefix = message.content.split(' ').slice(1).join(" ")
        if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
        p[message.guild.id].prefix = newPrefix 
        message.channel.send(`**${message.guild.name} Prefix Changed To ${newPrefix}**`);
    }

 if(message.content === (prefix + "help")) {
if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
const embed = new Discord.RichEmbed() 
      .setColor("#020000")
      .setDescription(`
\`\`\`
╭━━━╮╱╱╱╱╱╭━━╮╱╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱┃╭╮┃╱╱╱╭╯╰╮
╱┃┃┃┣━╮╭━━┫╰╯╰┳━━╋╮╭╯
╱┃┃┃┃╭╮┫╭╮┃╭━╮┃╭╮┃┃┃
╭╯╰╯┃┃┃┃╭╮┃╰━╯┃╰╯┃┃╰╮
╰━━━┻╯╰┻╯╰┻━━━┻━━╯╰━╯

\`\`\`
⚙\`${prefix}ban\`
** ⇏ لاعطاء باند لشخص**
⚙\`${prefix}kick\`
** ⇏ لاعطاء كيك لشخص**
⚙\`${prefix}mute\`
** ⇏ لاعطاء ميوت لشخص**
⚙\`${prefix}unmute\`
** ⇏ لفك الميوت عن شخص**
⚙\`${prefix}mutechannel\`
** ⇏ قفل الشات بل كامل**
⚙\`${prefix}unmutechannel\`
** ⇏ فك القفل الشات**
⚙\`${prefix}bc\`
** ⇏ لارسال رساله جماعية**
⚙\`${prefix}avatar\`
** ⇏ لاضهار صورتك**
⚙\`${prefix}image\`
** ⇏ لاضهار صورة السيرفر**
⚙\`${prefix}clear\`
** ⇏ لمسح الرسائل**
⚙\`${prefix}id\`
** ⇏ لاضهار معلومات عن حسابك**
⚙\`${prefix}server\`
** ⇏ لاضهار معلومات السيرفر**
⚙\`${prefix}moveall\`
** ⇏ لسحب الجميع عندك**
⚙\`${prefix}set-wlc\`
** ⇏ لاضهار اعدادات الولكم**
⚙\`${prefix}setprefix\`
** ⇏ لتغيير بريفكس البوت**
⚙\`${prefix}invite\`
** ⇏ لاضافه البوت**
⚙\`${prefix}ping\`
** ⇏ معرفه سرعه البوت**
⚙\`${prefix}bot\`
** ⇏ معلومات عن البوت**
⚙\`${prefix}uptime\`
** ⇏ لمعرفه مدة تشغيل البوت**
`)
        .setFooter(message.author.username, message.author.avatarURL);
    message.author.sendEmbed(embed)
}



//By: osama gmt


const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت بالدقائق**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

   if(message.content === prefix + "mutechannel") {
   if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**تم تقفيل الشات :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "unmutechannel") {
    if (!message.channel.guild) return message.reply('**This command only for servers ❌**');

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**تم فتح الشات:white_check_mark:**")
              });
                }
                
         
       
  if (message.content === (prefix + "id")) {
    if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
   message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")
    message.channel.sendEmbed(id);
})
}



   if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;
  command = command.slice(prefix.length);
  if (command == "kick") {
  if (!message.channel.guild) return message.reply('**This command only for servers ❌**');         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد اعطائه كيك**");
  message.guild.member(user).kick(7, user);
message.channel.send(`**:white_check_mark: ${user.tag} kick from the server ! :airplane: **  `)

}

  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  command = command.slice(prefix.length);

  if (command == "ban") {
  if (!message.channel.guild) return message.reply('**This command only for servers ❌**');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}

  

if(message.content === (prefix + "bot")) {
     if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
        const embed = new Discord.RichEmbed()
            .setTitle(`**BotInfo**`)
            .addField(`:wrench:\`servers\`: ${client.guilds.size}  `  , `-` )
            .addField(`:wrench:\`Users  \`: ${client.users.size}   `  , `-` )
            .addField(`:wrench:\`chanels\`: ${client.channels.size}`  , `-` )
            .setColor('#ff0000')
 message.channel.send({embed});
}
            if(!message.channel.guild) return;
   if(message.content === (prefix + "bcc")) {
 if(!message.author.id === '465110270939889665') return;
message.channel.sendMessage('تم جاري ارسال الرساله')
client.users.forEach(m =>{
m.sendMessage(args)
})
}



    if(!message.channel.guild) return;
    if(message.content === (prefix + "ping")) {
    if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
   if(!message.channel.guild) return;
      var msg = `${Date.now() - message.createdTimestamp}`
      var api = `${Math.round(client.ping)}`
   if (message.author.bot) return;
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setColor('RANDOM')
      .addField('**Time Taken:**',msg + " ms :signal_strength: ")
      .addField('**WebSocket:**',api + " ms :signal_strength: ")
       message.channel.send({embed:embed});
}




 if(message.content === (prefix + "uptime")) {
 if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}




    if (message.content === (prefix + "invite")) {
        if(!message.channel.guild) return message.reply('**هادا الامر للسرفرات فقط**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=470451682417967116&scope=bot&permissions=9')
  message.channel.sendEmbed(embed);
   }


      if (message.content.startsWith(prefix + "avatar")) {
      if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
      let user = message.mentions.users.first() || message.author;
      const embed = new Discord.RichEmbed()
            .setImage(user.displayAvatarURL)
            .setColor("RANDOM");
            message.channel.send({embed});
}

if (msg.content.startsWith(prefix + "image")) {
      if (!msg.channel.guild) return msg.reply('**This command only for servers ❌**');
      const embed = new Discord.RichEmbed()
    .setImage(msg.guild.iconURL)
    .setURL(msg.guild.iconrURL)
    .setColor("RANDOM");
            msg.channel.send({embed});


    if (message.author.id === client.user.id) return;
    if (message.guild) {
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(`**${prefix}bc <message>**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
            var bc = new Discord.RichEmbed()
            .addField("●[من سيرفر]", message.guild.name, true)
            .addField("●[الى]", `${m}` , true)
            .addField('●[الرسالة]', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
             if(message.attachments.first()){
            m.sendFile(message.attachments.first().url).catch();
    }
            m.send(`${m}`,{embed: bc});
        });
    message.delete(); 
    }
    } else {
        return;
    }

  
 if(message.content === (prefix + "clear")) {
 if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
      msg = parseInt();

    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: ".."
      }
    }}).then(msg => {msg.delete(3000000000000)});
	
                        }

if(!message.guild) return
  if(!sw[message.guild.id]) sw[message.guild.id] = {
  onoff: 'on',
  ch: 'Welcome',
  msk: 'Welcome'
  }
 if(message.content === (prefix + "set-wlc")) {
 if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
  let perms = message.member.hasPermission(`MANAGE_CHANNELS`)
  if(!perms) return message.channel.send('**You need `Manage Channels` permission**')
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`
   ${prefix}set-wlc toggle 
   ${prefix}set-wlc set [Channel Name]
   ${prefix}set-wlc info`) 
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return message.reply(`
  ${prefix}set-wlc toggle 
  ${prefix}set-wlc set [Channel Name]
 `) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(sw[message.guild.id].onoff === 'Off') return [message.channel.send(`**Welcome Message Is **ON** !**`), sw[message.guild.id].onoff = 'On']
     if(sw[message.guild.id].onoff === 'On') return [message.channel.send(`**Welcome Message Is **OFF** !**`), sw[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newch = message.content.split(" ").slice(2).join(" ")
   if(!newch) return message.reply(`${prefix}set-wlc set [Channel name]`)
     if(!message.guild.channels.find(`name`,newch)) return message.reply(`I Cant Find This Channel.`)
    sw[message.guild.id].ch = newch
     message.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
   } 
   if(state.trim().toLowerCase() == 'msg') {
    let newmsg = message.content.split(" ").slice(2).join(" ")
    if(!newmsg) return message.reply(`${prefix}set-wlc msg [New Message]`)
     sw[message.guild.id].msk = newmsg
      message.channel.send(`**Welcome message Has Been Changed to ${newmsg}.**`)
    } 
         }
if(message.content === prefix + 'set-wlc info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    //var embed = new Discord.RichEmbed()
.addField(`Welcome message  `, `
On/Off : __${sw[message.guild.id].onoff}__
Channel : __${sw[message.guild.id].ch}__`)
    .setColor(`BLUE`)
    message.channel.send({embed})
  }

    fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
    if (err) console.error(err)
  });



        if(!message.channel.guild) return;

        if(message.content === (prefix + "server")) {
        if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
        let guild = message.guild
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }

          if(message.content === (prefix + "moveall")) {
             if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
             if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
             if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
             if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
             var author = message.member.voiceChannelID;
             var m = message.guild.members.filter(m=>m.voiceChannel)
             message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
             m.setVoiceChannel(author)
             })
             message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
            
            
             }
              }
              });
  
client.on('guildMemberAdd', member => {
  let ch = member.guild.channels.find("name" , sw[member.guild.id].ch);
      if(!sw[member.guild.id]) sw[member.guild.id] = {
  onoff: 'Off',
  ch: 'Welcome',
  msk: 'Welcome'
  }
  if(sw[member.guild.id].onoff === 'Off') return;
  if (member.user.bot) return;
  var Canvas = require('canvas')
  var jimp = require('jimp')
  const w = ['./img/bot.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(749, 198),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 749, 198);
  
  })
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                          if (err) return console.log(err);
                          ctx.font = '35px agent_orange';
                          ctx.fontSize = '40px';
                          ctx.fillStyle = "#FFD700";
                          ctx.textAlign = "center";
                          ctx.fillText(" Welcome to " + member.guild.name , 300, 60);
                          //ur name
                          ctx.font = '40px Impact';
                          ctx.fontSize = '48px';
                          ctx.fillStyle = "#FFD700";
                          ctx.textAlign = "center";
                          ctx.fillText(member.user.username, 300, 110);
   ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFD700";
                        ctx.textAlign = "center";
                        ctx.fillText("Member Number " + member.guild.memberCount, 300, 150);
                        //Avatar
                    let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);     

ch.sendFile(canvas.toBuffer()).catch(console.error)
                      })  
})

});

client.on('ready',  () => {
  console.log('By :');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});

client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`${prefix}help Servers ${client.guilds.size} `,`${prefix}invite Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/osama_gmt`);
    }, ms);100000

});


client.login(process.env.BOT_TOKEN);
