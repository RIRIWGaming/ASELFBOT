const _0x4a1cb6=_0x314e;(function(_0x3ec6d1,_0x354cf6){const _0x323cfb=_0x314e,_0x40f928=_0x3ec6d1();while(!![]){try{const _0x52cd6a=-parseInt(_0x323cfb(0xf4))/0x1*(parseInt(_0x323cfb(0x106))/0x2)+parseInt(_0x323cfb(0xff))/0x3*(parseInt(_0x323cfb(0xed))/0x4)+parseInt(_0x323cfb(0x104))/0x5*(parseInt(_0x323cfb(0xfb))/0x6)+-parseInt(_0x323cfb(0xea))/0x7*(-parseInt(_0x323cfb(0xf8))/0x8)+parseInt(_0x323cfb(0xec))/0x9+-parseInt(_0x323cfb(0xf5))/0xa*(parseInt(_0x323cfb(0xf0))/0xb)+-parseInt(_0x323cfb(0xe3))/0xc;if(_0x52cd6a===_0x354cf6)break;else _0x40f928['push'](_0x40f928['shift']());}catch(_0xff94fc){_0x40f928['push'](_0x40f928['shift']());}}}(_0x2c2f,0x88932));function _0x314e(_0x33556e,_0x108e02){const _0x2c2fe4=_0x2c2f();return _0x314e=function(_0x314ea8,_0x372246){_0x314ea8=_0x314ea8-0xe3;let _0x434437=_0x2c2fe4[_0x314ea8];return _0x434437;},_0x314e(_0x33556e,_0x108e02);}function _0x2c2f(){const _0xf65caf=['red','19106TWNSSa','12930QsIrpU','./index.js','warn','16vJUAtf','browserDescription','qrcode-terminal','5862YXMWpJ','\x20is\x20now\x20updated!','./lib/color','log','2324370JDLrHG','writeFileSync','Connecting...','loadAuthInfo','RIRIWGaming','2030iRxjMu','white','30yPZTio','19196052nuDprY','Chrome','chat-update','base64EncodedAuthInfo','./session.json','connect','is\x20now\x20being\x20watched\x20for\x20changes','3802421ZlCJzo','connecting','9172908LjNDkV','4AQztUM','watchFile','3.0','7073XqUwww','resolve','string'];_0x2c2f=function(){return _0xf65caf;};return _0x2c2f();}const {WAConnection,MessageType,Presence,Mimetype,GroupSettingChange}=require('@adiwajshing/baileys'),qrcode=require(_0x4a1cb6(0xfa)),fs=require('fs'),{banner,start,success}=require('./lib/functions'),{color}=require(_0x4a1cb6(0xfd));require(_0x4a1cb6(0xf6)),nocache('./index.js',_0x47943e=>console[_0x4a1cb6(0xfe)](_0x47943e+_0x4a1cb6(0xfc)));const starts=async(_0x14df45=new WAConnection())=>{const _0x3a0bd9=_0x4a1cb6;_0x14df45['logger']['level']=_0x3a0bd9(0xf7),_0x14df45['version']=[0x2,0x85f,0x3],_0x14df45[_0x3a0bd9(0xf9)]=[_0x3a0bd9(0x103),_0x3a0bd9(0xe4),_0x3a0bd9(0xef)],console['log'](banner[_0x3a0bd9(0xf2)]),_0x14df45['on']('qr',()=>{const _0x17205b=_0x3a0bd9;console[_0x17205b(0xfe)](color('[',_0x17205b(0x105)),color('!',_0x17205b(0xf3)),color(']',_0x17205b(0x105)),color('\x20Scan\x20bang'));}),fs['existsSync'](_0x3a0bd9(0xe7))&&_0x14df45[_0x3a0bd9(0x102)]('./session.json'),_0x14df45['on'](_0x3a0bd9(0xeb),()=>{const _0x1ae0f9=_0x3a0bd9;start('2',_0x1ae0f9(0x101));}),_0x14df45['on']('open',()=>{success('2','Connected');}),await _0x14df45[_0x3a0bd9(0xe8)]({'timeoutMs':0x1e*0x3e8}),fs[_0x3a0bd9(0x100)](_0x3a0bd9(0xe7),JSON['stringify'](_0x14df45[_0x3a0bd9(0xe6)](),null,'\x09')),_0x14df45['on'](_0x3a0bd9(0xe5),async _0x17eeda=>{const _0x1ad14c=_0x3a0bd9;require(_0x1ad14c(0xf6))(_0x14df45,_0x17eeda);});};function nocache(_0x54e0e0,_0x15039f=()=>{}){const _0x374b49=_0x4a1cb6;console[_0x374b49(0xfe)]('Module','\x27'+_0x54e0e0+'\x27',_0x374b49(0xe9)),fs[_0x374b49(0xee)](require[_0x374b49(0xf1)](_0x54e0e0),async()=>{const _0x1d7fbf=_0x374b49;await uncache(require[_0x1d7fbf(0xf1)](_0x54e0e0)),_0x15039f(_0x54e0e0);});}function uncache(_0x5c0db0='.'){return new Promise((_0x1de274,_0x1e40b7)=>{const _0x38b293=_0x314e;try{delete require['cache'][require[_0x38b293(0xf1)](_0x5c0db0)],_0x1de274();}catch(_0x4b7053){_0x1e40b7(_0x4b7053);}});}starts();