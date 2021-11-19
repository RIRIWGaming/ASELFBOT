const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
const badword = JSON.parse(fs.readFileSync('./lib/badword.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')


banChats = true
offline = false
targetpc = '6283833271665'
owner = '6283833271665'
fake = 'SELFBOT'
let tictactoe = [];
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
module.exports = rrwg = async (rrwg, rrw) => {
	try {
        if (!rrw.hasNewMessage) return
        rrw = rrw.messages.all()[0]
		if (!rrw.message) return
		if (rrw.key && rrw.key.remoteJid == 'status@broadcast') return
		global.blocked
        	rrw.message = (Object.keys(rrw.message)[0] === 'ephemeralMessage') ? rrw.message.ephemeralMessage.message : rrw.message
        	const content = JSON.stringify(rrw.message)
		const from = rrw.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(rrw.message)[0]        
                const cmd = (type === 'conversation' && rrw.message.conversation) ? rrw.message.conversation : (type == 'imageMessage') && rrw.message.imageMessage.caption ? rrw.message.imageMessage.caption : (type == 'videoMessage') && rrw.message.videoMessage.caption ? rrw.message.videoMessage.caption : (type == 'extendedTextMessage') && rrw.message.extendedTextMessage.text ? rrw.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && rrw.message.conversation.startsWith(prefix)) ? rrw.message.conversation : (type == 'imageMessage') && rrw.message.imageMessage.caption.startsWith(prefix) ? rrw.message.imageMessage.caption : (type == 'videoMessage') && rrw.message.videoMessage.caption.startsWith(prefix) ? rrw.message.videoMessage.caption : (type == 'extendedTextMessage') && rrw.message.extendedTextMessage.text.startsWith(prefix) ? rrw.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? rrw.message.conversation : (type === 'extendedTextMessage') ? rrw.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && rrw.message.conversation) ? rrw.message.conversation : (type == 'imageMessage') && rrw.message.imageMessage.caption ? rrw.message.imageMessage.caption : (type == 'videoMessage') && rrw.message.videoMessage.caption ? rrw.message.videoMessage.caption : (type == 'extendedTextMessage') && rrw.message.extendedTextMessage.text ? rrw.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = rrwg.user.jid
		const botNumberss = rrwg.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? rrw.participant : rrw.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await rrwg.chats.all()
		const groupMetadata = isGroup ? await rrwg.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBadWord = isGroup ? badword.includes(from) : false
        const conts = rrw.key.fromMe ? rrwg.user.jid : rrwg.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = rrw.key.fromMe ? rrwg.user.name : conts.notify || conts.vname || conts.name || '-'
        const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
        const tictac = require("./lib/tictac");


        //MESS
		mess = {
			wait: 'Wait!',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup bang',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            rrwg.sendMessage(from, teks, text, {quoted:rrw})
        }

        const sendMess = (hehe, teks) => {
            rrwg.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? rrwg.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : rrwg.sendMessage(from, teks.trim(), extendedText, { quoted: rrw, contextInfo: { "mentionedJid": memberr } })
        }
        function monospace(string){
            return '```' + string + '```'
            }
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await rrwg.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
rrwg.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

        const fakestatus = (teks) => {
            rrwg.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftroli = (teks) => {
            rrwg.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" } : {})
                        },
                        message: {
                            "orderMessage": {
                                "orderId":"174238614569481",
                                "thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),
                                "itemCount":10,
                                "status":"INQUIRY",
                                "surface":"CATALOG",
                                "message":`⊳ SELFBOT ⊲`,
                                "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            rrwg.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:rrw,caption:yes})
        }
        const fakegroup = (teks) => {
            rrwg.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        rrwg.sendMessage(to, media, MessageType.sticker,{quoted:rrw})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    rrwg.sendMessage(to, media, type, { quoted: rrw, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
        if (messagesC.includes("http")){
        if(!isGroup) return reply(mess.only.group)
		if (!isAntiLink) return
		if (isGroupAdmins && !rrw.key.fromMe) return reply('punten kang')
		rrwg.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link  Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`)
			rrwg.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
            cekafk(afk)
            if (!rrw.key.remoteJid.endsWith('@g.us') && offline){
            if (!rrw.key.fromMe){
            if (isAfk(rrw.key.remoteJid)) return
            addafk(rrw.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            rrwg.sendMessage(rrw.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (rrw.key.remoteJid.endsWith('@g.us') && offline) {
        if (!rrw.key.fromMe){
        if (rrw.message.extendedTextMessage != undefined){
        if (rrw.message.extendedTextMessage.contextInfo != undefined){
        if (rrw.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of rrw.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(rrw.key.remoteJid)) return
        addafk(rrw.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        rrwg.sendMessage(rrw.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	const isStMsg = (type == 'listResponseMessage') ? rrw.message.listResponseMessage.selectedDisplayText : ''
      	const isBtMsg = (type == 'buttonsResponseMessage') ? rrw.message.buttonsResponseMessage.selectedDisplayText : ''
      	if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283833271665@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!rrw.key.fromMe && banChats === true) return
switch (isBtMsg) {
case 'OWNER':
rrwg.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: ftroli})
break

case 'DONASI':
reply(`https://saweria.co/RIRIWGaming`)
break
}
switch (isStMsg) {
case 'menu':
    		const timestamppp = speed();
			const latensiii = speed() - timestamppp
			runne = process.uptime() 
            const wektunyee = `${kyun(runne)}`
            wewe = fs.readFileSync(`./stik/fake.jpeg`)
    	    menue = `WAKTU : ${time}
SPEED : ${latensiii.toFixed(4)}
RUNTIME : ${wektunyee}

*</OWNER>*
► _${prefix}off_
► _${prefix}on_
► _${prefix}status_

*</MAKER>*
► _${prefix}sticker_
► _${prefix}swm_ <author|packname>
► _${prefix}take_ <author|packname>
► _${prefix}fdeface_
► _${prefix}emoji_
► _${prefix}blackpink_
► _${prefix}neon_
► _${prefix}greenneon_
► _${prefix}advanceglow_
► _${prefix}futureneon_
► _${prefix}sandwriting_
► _${prefix}sandsummer_
► _${prefix}sandengraved_
► _${prefix}metaldark_
► _${prefix}neonlight_
► _${prefix}holographic_
► _${prefix}text1917_
► _${prefix}minion_
► _${prefix}deluxesilver_
► _${prefix}newyearcard_
► _${prefix}bloodfrosted_
► _${prefix}halloween_
► _${prefix}jokerlogo_
► _${prefix}fireworksparkle_
► _${prefix}natureleaves_
► _${prefix}bokeh_
► _${prefix}toxic_
► _${prefix}strawberry_
► _${prefix}box3d_
► _${prefix}roadwarning_
► _${prefix}breakwall_
► _${prefix}icecold_
► _${prefix}luxury_
► _${prefix}cloud_
► _${prefix}summersand_
► _${prefix}horrorblood_
► _${prefix}thunder_
► _${prefix}pornhub_
► _${prefix}sponsburn_
► _${prefix}nulis_
► _${prefix}glitch_
► _${prefix}avenger_
► _${prefix}space_
► _${prefix}ninjalogo_
► _${prefix}marvelstudio_
► _${prefix}lionlogo_
► _${prefix}wolflog_
► _${prefix}steel3d_
► _${prefix}wallgravity_
► _${prefix}shadow_
► _${prefix}cup_
► _${prefix}cup1_
► _${prefix}romance_
► _${prefix}smoke_
► _${prefix}burnpaper_
► _${prefix}lovemessage_
► _${prefix}undergrass_
► _${prefix}love_
► _${prefix}coffe_
► _${prefix}woodheart_
► _${prefix}woodenboard_
► _${prefix}summer3d_
► _${prefix}wolfmetal_
► _${prefix}nature3d_
► _${prefix}underwater_
► _${prefix}golderrose_
► _${prefix}summernature_
► _${prefix}letterleaves_
► _${prefix}glowingneon_
► _${prefix}fallleaves_
► _${prefix}flamming_
► _${prefix}harrypotter_
► _${prefix}carvedwood_
► _${prefix}arcade8bit_
► _${prefix}battlefield4_
► _${prefix}pubg_
► _${prefix}wetglass_
► _${prefix}multicolor3d_
► _${prefix}watercolor_
► _${prefix}luxurygold_
► _${prefix}galaxywallpaper_
► _${prefix}light_
► _${prefix}beautifulflower_
► _${prefix}puppycute_
► _${prefix}royal_
► _${prefix}heartshaped_
► _${prefix}birthdaycake_
► _${prefix}galaxystyle_
► _${prefix}hologram3d_
► _${prefix}greenneon_
► _${prefix}glossychrome_
► _${prefix}greenbush_
► _${prefix}metallogo_
► _${prefix}noeltext_
► _${prefix}glittergold_
► _${prefix}textcake_
► _${prefix}starsnight_
► _${prefix}wooden3d_
► _${prefix}textbyname_
► _${prefix}writegalacy_
► _${prefix}galaxybat_
► _${prefix}snow3d_
► _${prefix}birthdayday_
► _${prefix}goldplaybutton_
► _${prefix}silverplaybutton_
► _${prefix}freefire_

*</CONVERT>*
► _${prefix}toimg_
► _${prefix}tomp3_
► _${prefix}tomp4_
► _${prefix}slow_
► _${prefix}fast_
► _${prefix}reverse_
► _${prefix}tourl_

*</UP STORY>*
► _${prefix}upswteks_
► _${prefix}upswimage_
► _${prefix}upswvideo_

*</FUN>*
► _${prefix}fitnah_
► _${prefix}fitnahpc_
► _${prefix}kontak_

*</TAG>*
► _${prefix}hidetag_
► _${prefix}kontag_
► _${prefix}sticktag_
► _${prefix}totag_

*</DOWNLOAD>*
► _${prefix}ytsearch_ <query>
► _${prefix}igstalk_ <query>
► _${prefix}play_ <query>
► _${prefix}video_ <query>
► _${prefix}ytmp3_ <link>
► _${prefix}ytmp4_ <link>
► _${prefix}ig_ <link>
► _${prefix}igstory_ <username>
► _${prefix}twitter_ <link>
► _${prefix}tiktok_ <link>
► _${prefix}tiktokaudio_ <link>
► _${prefix}fb_ <link>
► _${prefix}brainly_ <query>
► _${prefix}image_ <query>
► _${prefix}anime_ <random>
► _${prefix}pinterest_ <query>
► _${prefix}komiku_ <query>
► _${prefix}lirik_ <query>
► _${prefix}chara_ <query>
► _${prefix}playstore_ <query>
► _${prefix}otaku_ <query>

*</OTHER>*
► _${prefix}self_
► _${prefix}public_
► _${prefix}setthumb_
► _${prefix}settarget_
► _${prefix}setfakeimg_
► _${prefix}setreply_
► _${prefix}ping_
► _${prefix}inspect_
► _${prefix}join_
► _${prefix}caripesan_ <query>
► _${prefix}get_
► _${prefix}term_ <code>
► _x_ <code>

*</JADI BOT>*
► _${prefix}jadibot_
► _${prefix}stopjadibot_
► _${prefix}listbot_

*</VOTE>*
► _${prefix}voting_
► _${prefix}delvote_
► _vote_
► _devote_

❏ *SELF-BOT* ❏`
rrwg.sendMessage(from, wewe, image, { quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`⊳ SELFBOT ⊲`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: menue, contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
            break            
    case 'jadibot':
    if(rrw.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,rrwg,from)
    break
    case 'listbot':
    let tekses = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekses += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekses)
    break
            case 'ping':
			const timestampe = speed();
			const latensie = speed() - timestampe
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const childe = stdout.toString('utf-8')
			const teksue = childe.replace(/Memory:/, "Ram:")
			const pingnya = `*${teksue}Speed: ${latensie.toFixed(4)} Second*`
			rrwg.sendMessage(from, { quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`⊳ SELFBOT ⊲`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: pingnya, contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
            })
			break
}
switch (command) {
case 'info': 
bionyee = await rrwg.getStatus(sender)
menune = `Hallo ${pushname}

銆? INFO ANDA 銆?
- *Name* : ${pushname}
- *Nomor* : wa.me/${sender.split("@")[0]}
- *Bio* : ${bionyee.status}

- Join Grup Bot WhatsApp Untuk Mengetahui Update Bot
https://chat.whatsapp.com/GLMNVp01o8KHXyPaQx8BNd
`
buttons = [
  {buttonId: 'id3', buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'DONASI'}, type: 1},

]
sendButImage(from, menune, `漏 CREATOR : RIRIWGaming`, fs.readFileSync('./stik/fake.jpeg'), buttons, {quoted: rrw, contextInfo:{"mentionedJid": [sender]}})
break
    case 'jadibot':
    if(rrw.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,rrwg,from)
    break
    case 'stopjadibot':
    if(rrw.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    case 'menu':
    res = await rrwg.prepareMessageFromContent(from, {
           "listMessage": {
						"title": "⌜ SELFBOT WHATSAPP⌟            ",
						"description": `Subscribe YT : https://bit.ly/YTRRWG
Follow IG : https://bit.ly/INGRRWG


Klik dibawah ini untuk memilih command yang anda inginkan`,
						"buttonText": "👨‍💻CLICK THIS👨‍💻",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Pilih salah satu pilihan",
								"rows": [
									{
										"title": "/start menu",
										"rowId": "menu"
									},
									{
										"title": "/start ping",
										"rowId": "ping"
									},
									{
										"title": "/start jadibot",
										"rowId": "jadibot"
									},
									{
										"title": "/start listbot",
										"rowId": "listbot"
									}
								]
							}
						]
					}}, {})
 rrwg.relayWAMessage(res)
    case 'delvote':
            if(!rrw.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !rrw.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (rrw.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || rrw.message.extendedTextMessage.contextInfo == null) {
            let id = rrw.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'buggc':
if (!rrw.key.fromMe) return reply('SELF-BOT')
for (let i = 0; i < args[0]; i++) {
await rrwg.toggleDisappearingMessages(from, 0)
reply(`Sukses SendBugg`)
}
break
case 'antilink':
                    if(!isGroupAdmins && !rrw.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						rrwg.sendMessage(from,`Perhatian kepada seluruh member anti link  aktif apabila anda mengirim link apapun anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Mode anti link group sudah disable')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
	case 'add':
				if(!isGroupAdmins && !rrw.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara!')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						rrw.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
    case 'kick':
			if(!isGroupAdmins && !rrw.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
					if (rrw.message.extendedTextMessage === undefined || rrw.message.extendedTextMessage === null) return reply('Tag target!')
					mentioned = rrw.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						tekus = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							tekus += `@${_.split('@')[0]}\n`
						}
						mentions(tekus, mentioned, true)
						rrwg.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						rrwg.groupRemove(from, mentioned)
					}
					break

					case 'tictactoe': case 'ttt': case 'ttc':
	if(!isGroup) return reply(mess.only.group)
	if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
	if (args.length < 1) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	if (rrw.message.extendedTextMessage === undefined || rrw.message.extendedTextMessage === null) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	let mentioned = rrw.message.extendedTextMessage.contextInfo.mentionedJid
	if (mentioned.length !== 0){
			if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
			mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain`), [sender, mentioned[0]], false)
			tictactoe.push({
				id: from,
				penantang: sender,
				ditantang: mentioned[0],
				TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
			})
	} else {
		reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	}
	break
	case 'delttt':
case 'delttc':
	if(!isGroup) return reply(mess.only.group)
	if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
	tictactoe.splice(getPosTic(from, tictactoe), 1)
	reply(`Berhasil menghapus sesi tictactoe di grup ini`)
	break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    rrwg.sendMessage(from,link,video,{quoted: rrw,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    rrwg.sendMessage(from,link,image,{quoted: rrw,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await rrwg.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await rrwg.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            rrwg.sendMessage(from,ram,image,{quoted:rrw,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await rrwg.sendMessage(from,li,image,{quoted: rrw})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await rrwg.sendMessage(from,di,image,{quoted: rrw})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!rrw.key.fromMe) return 
            offline = false
            ftroli(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            ftroli(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!rrw.key.fromMe) return 
            ini_txet = args.join(" ")
            offline = true
            waktu = Date.now()
            anuu = ini_txet
            alasan = anuu
            ftroli(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            ftroli(bu)
            })   
            break
    case 'kontag':
            if (!rrw.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            rrwg.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !rrw.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !rrw.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !rrw.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !rrw.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !rrw.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = rrw.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            rrwg.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = rrw.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await rrwg.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await rrwg.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            rrwg.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: rrw })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            rrwg.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rrw })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            rrwg.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rrw })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            rrwg.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: rrw })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            rrwg.sendMessage(from,media,image,{quoted:rrw,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            rrwg.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELFBOT`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `YT: RIRIWGaming\nWA: 083833271665`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, rrwg, rrw, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !rrw.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
             media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            rrwg.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: rrw })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            rrwg.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: rrw })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && rrw.message.videoMessage.seconds < 11 || isQuotedVideo && rrw.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
            const media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            rrwg.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: rrw })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            rrwg.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: rrw })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            rrwg.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            cihcih = await rrwg.downloadMediaMessage(swsw)
            rrwg.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            rrwg.sendMessage(from, bur, text, { quoted: rrw })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            cihcih = await rrwg.downloadMediaMessage(swsw)
            rrwg.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            rrwg.sendMessage(from, bur, text, { quoted: rrw })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
            const tipes = await rrwg.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await rrwg.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		rrwg.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!rrw.key.fromMe) return ftroli('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	ftroli(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!rrw.key.fromMe) return ftroli('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	ftroli(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!rrw.key.fromMe) return ftroli('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await rrwg.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: rrw
			}
			rrwg.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !rrw.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            const media = await rrwg.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                rrwg.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: rrw})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && rrw.message.videoMessage.seconds < 11 || isQuotedVideo && rrw.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
                const media = await rrwg.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            rrwg.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: rrw})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await rrwg.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await rrwg.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !rrw.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
			delb = await rrwg.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !rrw.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
			delb = await rrwg.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            rrwg.sendMessage(from,{url:images},image,{quoted:rrw})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		rrwg.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:rrw,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			rrwg.sendMessage(from, teks, text,{quoted:rrw,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    rrwg.sendMessage(from,link,video,{quoted: rrw,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    rrwg.sendMessage(from,link,image,{quoted: rrw,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return ftroli('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await rrwg.acceptInvite(codeInvite)
            ftroli('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
            case 'group': case 'grup': case 'gc':
if(!isGroupAdmins && !rrw.key.fromMe) return 
if(!isGroup) return reply(mess.only.group)
if (!q) return
if (args[0] === 'open') {
rrwg.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
await rrwg.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else {
reply(`Penggunaan ${prefix + command} [open/close]\nContoh : ${prefix + command} close`)
}
break

case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if(!isGroupAdmins && !rrw.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
					linkgc = await rrwg.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					rrwg.sendMessage(from, yeh, text, { quoted: rrw })
					break


					case 'nulis':
				    case 'tulis':		
                 if (args.length < 1) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)               
              	ct = body.slice(6)
				reply(mess.wait)
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				rrwg.sendMessage(from, ct, image, {caption: 'Pandemi bikin malas ya :(', quoted: ftroli})
				break
case 'nulis2':
if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
teksus = body.slice(7)
reply(mess.wait)
let d = new Date
let tgl = d.toLocaleDateString('id-Id')
let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
spawn('convert', [
'./lib/nulis/images/magernulis1.jpg',
'-font',
'./lib/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
hari,
'-font',
'./lib/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
tgl,
'-font',
'./lib/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+365+102',
'-font',
'./lib/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+355+122',
'-font',
'./lib/nulis/font/Zahraaa.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+344+145',
teksus,
'./lib/nulis/hasil.jpg'
])
.on('error', () => reply("Maaf terjadi kesalahan"))
.on('exit', () => {
rrwg.sendMessage(from, fs.readFileSync(`./lib/nulis/hasil.jpg`), image, {caption: 'Jangan Males Pak', quoted: rrw})
})
break
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
	                reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=a00618b07db17ef4bc0dcefc&text=${ini_txt}`)
                    rrwg.sendMessage(from, ini_buffer, image, { quoted: rrw})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
	                reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=a00618b07db17ef4bc0dcefc&text1=${txt1}&text2=${txt2}`)
                    rrwg.sendMessage(from, ini_buffer, image, { quoted: rrw})
                    break

                    // Photo Oxy
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
	                reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=a00618b07db17ef4bc0dcefc&text=${ini_txt}`)
                    rrwg.sendMessage(from, ini_buffer, image, { quoted: rrw})
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
	                reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=a00618b07db17ef4bc0dcefc&text1=${txt1}&text2=${txt2}`)
                    rrwg.sendMessage(from, ini_buffer, image, { quoted: rrw})
                    break
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
	                reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=a00618b07db17ef4bc0dcefc&text=${ini_txt}`)
                    rrwg.sendMessage(from, ini_buffer, image, { quoted: rrw})
                    break

//Creator By Lolhuman Team
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} keren`)
                    teksnya = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=a00618b07db17ef4bc0dcefc&text=${teksnya}`)
                    rrwg.sendMessage(from, ini_buffer, sticker, { quoted: rrw})
                    break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			rrwg.sendMessage(from, { quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`⊳ SELFBOT ⊲`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: pingnya, contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
            })
			break  
    case 'totag':
            if ((isMedia && !rrw.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !rrw.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !rrw.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !rrw.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            file = await rrwg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await rrwg.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: rrw
            }
            ini_buffer = fs.readFileSync(file)
            rrwg.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !rrw.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(rrw).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rrw
            owgi = await rrwg.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !rrw.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(rrw).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rrw
            owgi = await rrwg.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await rrwg.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             rrwg.sendMessage(from,par,text,{quoted:rrw,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if (budy.startsWith('x')){
try {
return rrwg.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: rrw})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
