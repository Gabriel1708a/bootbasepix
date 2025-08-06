require('./config')
const { stellaConnect, useMultiFileAuthState, delay, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const webp = require("node-webpmux")
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { color } = require('./func/color')

const NickDono = 'Lima';
const numeroDono = '(41)91236158';

const { infodono } = require('./func/menu/infodono.js');
const { mensagens } = require('./armor/js/aleatoria.js');





var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];


module.exports = stella = async (stella, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
global.prefix = prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
args = args.concat(['','','','','',''])
const pushname = m.pushName || "Sem nome"
const botNumber = await stella.decodeJid(stella.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ").trim()
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)




const isAnticall = JSON.parse(fs.readFileSync('./func/anticall/anticall.json'));

	

// pra rodar qualquer comandos de outros bot

var stella = stella
var info = m
var SoDono = isCreator
var conn = stella
var mek = info
var Japa = conn
var aqua = conn
var sabrina = conn
var pl = conn
var emoji1 = `🩸`
var emoji2 = `✅`
var anna = conn
var client = conn
var XeonBotInc = conn
const img = JSON.parse(fs.readFileSync("./fotos/logo.json"))
logo = img.logo
/////////////////


// Grupo
const groupMetadata = m.isGroup ? await stella.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = isBotAdmins
const isGroupAdmins = isAdmins
const isDono = global.owner
//Outras funcoes
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeEmpresa}`}}}
const reply = (texto) => {
conn.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: selo}).catch(e => {
return reply("Erro..");
})
}

var selo2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc"}}}
const reply2 = (texto) => {
conn.sendMessage(from, { text: texto, mentions: [sender]}).catch(e => {
return reply("Erro..");
})
}

var selo3 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeEmpresa2}`}}}
const reply3 = (texto) => {
conn.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: selo3}).catch(e => {
return reply("Erro..");
})
}
/////////////////////////////
       
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
  
const enviarOrda = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "BRL", // Up to you
}
}), { userJid: jid })
conn.relayMessage(jid, order.message, { messageId: order.key.id})
}
 
 
 
       
       

// DELETAR ARQUIVO... \\
function DLT_FL(file) {
    try {
    fs.unlinkSync(file);
    } catch (error) {
    }
    }
/////////////////////////////


// RESPOSTAS \\
var Res_SoGrupo = "Este comando só deve ser utilizado em Grupos."
var Res_SoDono = "Este comando é apenas para o meu dono utilizar..."
var Res_SoAdm = "Só Administradores do grupo podem utilizar este comando.."
var Res_BotADM = "O Bot precisa ser Administrador do grupo para utilizar este comando..."
var Res_SoModoBN = `Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`
////////////////////////////


// FUNÇÕES DE MARCAÇÕES \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n = q.includes("@") ? menc_jid : sender
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////

const { imageToWebp,  videoToWebp, writeExifImg,  writeExifVid, writeExif } = require('./arquivos/lib/exif')



//=============DATA/HORA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');


const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const time_emoji = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_emoji > "00:00:00" && time_emoji < "05:00:00"){
var tempo_emoji = '🌑'
} if(time_emoji > "05:00:00" && time_emoji < "12:00:00"){
var tempo_emoji = '☀️'
} if(time_emoji > "12:00:00" && time_emoji < "18:00:00"){
var tempo_emoji = '🍃'
} if(time_emoji > "18:00:00"){
var tempo_emoji = '🌙'
}

const time_pro = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_pro > "00:00:00" && time_pro < "05:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "05:00:00" && time_pro < "12:00:00"){
var tempo_pro = 'um'
} if(time_pro > "12:00:00" && time_pro < "18:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "18:00:00"){
var tempo_pro = 'uma'
}
//=====================================



    //stella.readMessages([m.key])    
    // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
    if (!isGroup && isCmd) console.log(
    color(`[${emoji2}] chat em privado [${emoji2}]`,'cyan'),'\n',
    color('⪼ NΙCK :','blue'),color(pushname,'cyan'),'\n',
    color('⪼ CМD :','blue'),color(body,'cyan'),'\n',
    color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
    color('⪼ DAТA :','blue'),color(dataa,'cyan'),'\n')

    // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
    if (isCmd && isGroup) console.log(
    color(`[${emoji2}] mensagem em grupo [${emoji2}]`,'red'),'\n',
    color('⪼ GRUPO :','yellow'),color(groupName,'cyan'),'\n',
    //color('⪼ CLIENTE :','green'),color(pushname,'cyan'),'\n',
    color('⪼ TEXTO :','yellow'),color(body,'cyan'),'\n',
    color('⪼ HORA :','yellow'),color(hora,'cyan'),'\n',
    color('⪼ DATA :','yellow'),color(dataa,'cyan'),'\n')
    
    
    if(!isGroup && isAnticall)
    if(isDono) {
client.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
client.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot seu merda, você será bloqueado..." }).then(() => { 
delay(4000)
client.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
vip: '[❗] ESTE COMANDO É SÓ PARA *USUÁRIOS VIP*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${NickDono}*`,
banido: '[❗] Você está proibido de usar os comandos do bot... Entre em contato com meu dono para saber o por que ❌' ,
donosmt: '[❗] Este comando está restrito ao uso do meu dono ❌',
donosmt2: `[❗] Este comando só pode ser usado pelo ${NickDono}, meu dono ❌`,
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
modobz: `[❗] Este comando só pode ser usado com as brincadeiras ativadas... Use ${prefix}modozoeira ❌`,
consulta: '[⚙️] consultando dados, aguarde um momento❗',
notusu: `[❗] ID do usuário não encontrado ou inexistente ❌`
}
}


async function carregamento3 () {
var carre = [
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▭▭▭▭▭▭▭▭▭》10%🕚",
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▬▬▭▭▭▭▭▭▭》30%🕚",
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▬▬▬▬▭▭▭▭▭》50%🕚",
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▬▬▬▬▬▬▭▭▭》70%🕚",
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▬▬▬▬▬▬▬▬▭》90%🕚",
" ᴀɢᴜᴀʀᴅᴇ\n《 ▬▬▬▬▬▬▬▬▬▬》100%🕚",
"𝗢𝗕𝗥𝗜𝗚𝗔𝗗𝗢 𝗣𝗢𝗥 𝗔𝗚𝗨𝗔𝗥𝗗𝗔𝗥🤝 "
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//primeira mensagem

//aqui é onde esta a magia
for (let i = 0; i < carre.length; i++) {
await conn.sendMessage(from, {text: carre[i], edit: key });//aqui é onde esta magia
}

}

    

//===================================//
async function pagamento1 () {
try {



var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'SEU TOKEN MERCADO PAGO AQUI' 
});
var payment = {
  transaction_amount: 1.00,
  description: 'PAGAMENTO-Eliel',
  payment_method_id: 'pix',
  payer: {
    email: 'email@gmail.com',
    first_name: 'pagamento',
    last_name: 'LTDA',
    identification: {
  type: 'cpf',
  number: '0000000000'
    },
    address:  {
  zip_code: 'CEP',
  street_name: 'RUA',
  street_number: 'NUMBER',
  neighborhood: 'BAIRRO',
  city: 'CIDADE',
  federal_unit: 'BA'
    }
  }
};
var pagamentohora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
var pagamentodata = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
var data = mercadopago.payment.create(payment).then(data => {
  let pix = (data.response.point_of_interaction.transaction_data.qr_code);
  let id1 = (data.response.id)
  let sta = (data.response.status)
 
conn.sendMessage(from,{text: `💠 PIX AUTOMATICO!✅\n NO VALOR DE: R$${payment.transaction_amount}\n\n• ID DO PAGAMENT0: ${id1}\n• STATUS PIX: ${sta}\n• 📅DATA PEDIDO: ${pagamentodata}\n• 🕐HORA PEDIDO: ${pagamentohora}\n\n• 🛍️SEU PRODUTO🛍️:\n nome do produto aqui `}, {quoted: info})
setTimeout(async() => {
conn.sendMessage(from,{text:`${pix}`})
await sleep(200);
conn.sendMessage(from,{text:`💳 Copie o Codigo Do Pix Acima 👆🏻\n\• Faça o Pagamento No seu Banco!`})
}, 8000)
let tentativas = 0;
var interval = setInterval(async () => {
tentativas++;
var res = await mercadopago.payment.get(data.body.id);
var pagamentoStatus = res.body.status;
if (tentativas >= 1200 || pagamentoStatus === 'approved') {
if (pagamentoStatus === 'approved') {
key = await `coloque o link do seu produto aqui`
setTimeout(async() => {
await conn.sendMessage(from,{text:`❤️ Muito Obrigado Por adquirir nosso produto, Eu Eliel agradeço a sua confiança!\nAguarde um pouquinho, Estou Validando Algumas informações...`})
await sleep(900);
await reply(`*✅ PAGAMENTO APROVADO!*\n\naqui está os dados do seu produto😍👇:\n\n${key}\n\n*`)
}, 8000)
await conn.sendMessage(`5594900000000@s.whatsapp.net`, {text: `✅ COMPRA BEM SUCEDIDA!\n\nℹ️ INFOS: COMPRADOR: https://wa.me/${sender.split("@")[0]}`}, {quoted: info})
clearInterval(interval);
}
}
}, 1_000);
})

} catch (err) {
        console.log(util.format(err))
    }
}   

async function pagamento2 () {
try {



var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'SUA KEY DO MERCADO PAGO' 
});
var payment = {
  transaction_amount: 8.00,
  description: 'PAGAMENTO-Eliel',
  payment_method_id: 'pix',
  payer: {
    email: 'email@gmail.com',
    first_name: 'pagamento',
    last_name: 'LTDA',
    identification: {
  type: '54731429234',
  number: '0000000000'
    },
    address:  {
  zip_code: 'CEP',
  street_name: 'RUA',
  street_number: 'NUMBER',
  neighborhood: 'BAIRRO',
  city: 'CIDADE',
  federal_unit: 'BA'
    }
  }
};
var pagamentohora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
var pagamentodata = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
var data = mercadopago.payment.create(payment).then(data => {
  let pix = (data.response.point_of_interaction.transaction_data.qr_code);
  let id1 = (data.response.id)
  let sta = (data.response.status)
 
conn.sendMessage(from,{text: `💠 PIX AUTOMATICO!✅\n NO VALOR DE: R$${payment.transaction_amount}\n\n• ID DO PAGAMENT0: ${id1}\n• STATUS PIX: ${sta}\n• 📅DATA PEDIDO: ${pagamentodata}\n• 🕐HORA PEDIDO: ${pagamentohora}\n\n• 🛍️SEU PRODUTO🛍️:\n nome do seu produto  aqui`}, {quoted: info})
setTimeout(async() => {
conn.sendMessage(from,{text:`${pix}`})
await sleep(200);
conn.sendMessage(from,{text:`💳 Copie o Codigo Do Pix Acima 👆🏻\n\• Faça o Pagamento No seu Banco!`})
}, 8000)
let tentativas = 0;
var interval = setInterval(async () => {
tentativas++;
var res = await mercadopago.payment.get(data.body.id);
var pagamentoStatus = res.body.status;
if (tentativas >= 1200 || pagamentoStatus === 'approved') {
if (pagamentoStatus === 'approved') {
key = await `coloque o link ou dados do seu produto aqui`
setTimeout(async() => {
await conn.sendMessage(from,{text:`❤️ Muito Obrigado Por adquirir nosso produto, Eu Eliel agradeço a sua confiança!\nAguarde um pouquinho, Estou Validando Algumas informações...`})
await sleep(900);
await reply(`*✅ PAGAMENTO APROVADO!*\n\naqui está os dados do seu produto😍👇:\n\n${key}\n\n*`)
}, 8000)
await conn.sendMessage(`559492607631@s.whatsapp.net`, {text: `✅ COMPRA BEM SUCEDIDA!\n\nℹ️ INFOS: COMPRADOR: https://wa.me/${sender.split("@")[0]}`}, {quoted: info})
clearInterval(interval);
}
}
}, 1_000);
})

} catch (err) {
        console.log(util.format(err))
    }
}

        switch(command) {
        
//O MENU COMEÇA APARTI  DAQUI//      
        
        
        //comando de amostra de como funciona o pix automático 
        case 'comprarr': 
        if (isGroup) return
        await reply('aguarde...')
        await sleep(3000) //tempo de espera
       await pagamento2() // isso puxa o pix automático.
       break;
       
        
        //as palavras na frente de: "case" são as palavras chaves coloque s que você quiser//

 case 'olá': 
 case 'ola': 
 case 'oi': 
 case 'oii': 
 case 'opa': 
 case 'menu': 
 case 'bom': 
 case 'dia':
 case 'boa': 
 case 'tarde':
 case 'noite': 
 case '/menu': 
 

if (isGroup) return
await stella.sendMessage(from, {
image: fs.readFileSync('./fotos/imagemmenu/menu.jpg'),
caption: `
            OLÁ, *${tempo}😍*
  ◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉\n
*👋SEJA MUITO BEM VINDO(A)*
*ME CHAMO LIMAX SEU ATENDENTE VIRTUAL* 🤖
◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉◦•●◉◦◉\n\n\n> 𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 ©bottechwpp.™

` 
},
{quoted: selo3
})


case 'a668':
await sleep(5000)
 {
 if (isGroup) return 
 await stella.sendMessage(from, { react: { text: '🛍️', key: info.key }})    
 
  let byeliel_oi = `
 *BEM VINDO AO MENU:* \n
  •escolha uma opção abaixo👇\n e *clique!*
                `
                
                stella.sendPoll(from, byeliel_oi, [`telas📺 \ncoloque uma descrição aqui`, 'produtos🛍️ \ndescricão aqui',`formas-pagamento💰 \n escolha um tipo de pagamento`, 'Informações bot \nconheça mais sobre o bot', 'suporte🧑‍💻 \nfale com um atendente '])
            }
            
 break 
 
 case 'menu-botoes':
 case 'telas📺':
 await sleep(2000) 
 {
 if (isGroup) return
 //await stella.sendMessage(from, { react: { text: '🛍️', key: info.key }})  
 let byeliel_oi = `
 *BEM VINDO AO MENU 2:*
 
   • escolha uma opção abaixo👇\n e *clique!*
                `
       
                stella.sendPoll(from, byeliel_oi, [`texto `, 'imagemm', `audioo \ndemostração de audio como se fosse enviado na hora`, 'videoo', 'figurinha', 'arquivo-pdf', 'arquivo-zip', 'arquivo-apk',  '👈suporte🧑‍💻 \nfale com um atendente '])
            }
            
 break 

case 'produtos🛍️':

 await sleep(2000)
 {
 if (isGroup) return 
 //await stella.sendMessage(from, { react: { text: '🛍️', key: info.key }})  
 let byeliel_oi = `
                 *MENU PRODUTOS🛍️*
   *escolha uma opção abaixo*👇\n e *clique!*
                `
         
                stella.sendPoll(from, byeliel_oi, [`produto1 \ndescrição aqui `, 'produto2 \ndescrição aqui', `produto3 \ndescrição aqui`])
            }

break;






case 'formas-pagamento💰':
case 'produto1':
 {
 if (isGroup) return
let bla = fs.readFileSync("./dados/figurinhas/figupix.webp")
await stella.sendMessage(from, {sticker: bla})
 let byeliel_oi = `
 *BEM VINDO AO MENU: Formas de pagamento💠*\n
   *escolha uma opção abaixo*👇\n e *clique!*
                `
 await sleep(2000)        
  stella.sendPoll(from, byeliel_oi, [`pix-email `, 'pix-celular', `pix-qrcode \nou copia e cola`])
            }

break;

case 'pix-email':
if (isGroup) return
reply(`seu-pix-email-laqui@gmail.com`)
break

case 'pix-celular':
if (isGroup) return
reply(` *pix via celular📲*\n
559499260-0000`)
break
case 'pix-qrcode':
await stella.sendMessage(from, {
image: fs.readFileSync('./fotos/qrcode/qrcode.jpg'),
caption: `
  AQUI VOCÊ PODE ADICIONAR O CODIGO DO QRCODE.

` 
},
{quoted: selo3
})


break

case 'pix-automatico':
if (isGroup) return
pagamento1()
break

break

case 'texto':
if (isGroup) return
await sleep(2000)
reply('aqui está seu texto🤩');
break;

case 'imagemm':
if (isGroup) return 
  await stella.sendMessage(from, {
image: fs.readFileSync('./fotos/imagem.jpg'),
caption: `
  AQUI VOCÊ PODE ADICIONAR UM TEXTO

` 
},
{quoted: selo3
})
break;

case 'audioo':
if (isGroup) return
await stella.sendMessage(from, {
audio: fs.readFileSync('./dados/audio/meuaudio.opus'),
mimetype: 'audio/mp4',
ptt: true
},
{quoted: selo
})
break;

case 'videoo':
if (isGroup) return
//if (isCreator) return stella.sendMessage(from, {text: '✅'})
menu8 = ` *você pode adicionar um texto aqui...*`
await stella.sendMessage(from, {video: fs.readFileSync('./videos/video.mp4'), caption: menu8}, {quoted: m})

break


case 'figurinha':
if (isGroup) return
    // Lê o arquivo da figurinha (deve ser um arquivo .webp)
    const stickerFile = fs.readFileSync("./dados/figurinhas/figu1.webp");

    // Envia o sticker com um texto citado
    await stella.sendMessage(from, { 
        sticker: stickerFile
    }, { 
        quoted: info // Mensagem original para citar
    });

    break;


case 'arquivo-pdf':
if (isGroup) return
    // Lê o arquivo PDF
    const bla = fs.readFileSync("./dados/doc/doc.pdf");

    // Envia o documento com um texto citado
    await stella.sendMessage(from, { 
        document: bla, 
        mimetype: 'application/pdf', 
        fileName: 'documento.pdf', 
        caption: 'Seu PDF aqui' // Texto que aparece na legenda
    }, { 
        quoted: info // Mensagem original para citar
    });

    break;


case 'arquivo-apk':
if (isGroup) return
    // Lê o arquivo APK
    const apkFile = fs.readFileSync("./dados/aplicativos/mtmanager.apk");

    // Envia o arquivo APK com um texto citado
    await stella.sendMessage(from, { 
        document: apkFile, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: 'mtmanager.apk', 
        caption: 'Seu aplicativo aqui 📱' // Texto que aparece na legenda
    }, { 
        quoted: info // Mensagem original para citar
    });

    break;

case 'arquivo-zip':
if (isGroup) return
    // Lê o arquivo ZIP
    const zipFile = fs.readFileSync("./dados/arquivos/arquivo.zip");

    // Envia o arquivo ZIP com um texto citado
    await stella.sendMessage(from, { 
        document: zipFile, 
        mimetype: 'application/zip', 
        fileName: 'meu_arquivo.zip', 
        caption: 'Aqui está seu arquivo ZIP 📂' // Texto que aparece na legenda
    }, { 
        quoted: info // Mensagem original para citar
    });

    break;

case 'Informações bot':
if (isGroup) return 
await sleep(1000)
reply(`Estas são as informações`)
break

case '👈suporte🧑‍💻':
if (isGroup) return 
await sleep(1500)
if (args.length >= 800) return stella.sendMessage(from, {text: 'Máximo 800 caracteres'})
sug = `*NOTIFICAÇÃO IMPORTANTE*\n\n*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n Alguém Precisa de suporte no pv do Bot de atendimento e estou aqui para notifica-lo`
await sleep(2000)
await stella.sendMessage(`${global.owner}@s.whatsapp.net`, {text: sug})
await sleep(1000)
reply(`Notificação enviada ao meu dono em breve ele irá entrar em contato!\n\n 🌀𝘼𝙘𝙤𝙣𝙨𝙚𝙡𝙝𝙤 𝙁𝙖𝙡𝙖𝙧 𝘿𝙞𝙧𝙚𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙘𝙤𝙢 𝙚𝙡𝙚 𝘾𝙡𝙞𝙘𝙖𝙣𝙙𝙤 𝙣𝙤 𝙇𝙞𝙣𝙠 𝙖𝙗𝙖𝙞𝙭𝙤👇 \n\n wa.me/${global.owner}\n\n`)
break

case '👈suporte2🧑‍💻':
if (isGroup) return 
await sleep(1500)
if (args.length >= 800) return stella.sendMessage(from, {text: 'Máximo 800 caracteres'})
sug = `*NOTIFICAÇÃO IMPORTANTE*\n\n*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n Alguém Precisa de suporte no pv do Bot de atendimento e estou aqui para notifica-lo`
await sleep(2000)
await stella.sendMessage(`${global.owner}@s.whatsapp.net`, {text: sug})
await sleep(1000)
reply(`Notificação enviada ao meu dono em breve ele irá entrar em contato!\n\n 🌀𝘼𝙘𝙤𝙣𝙨𝙚𝙡𝙝𝙤 𝙁𝙖𝙡𝙖𝙧 𝘿𝙞𝙧𝙚𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙘𝙤𝙢 𝙚𝙡𝙚 𝘾𝙡𝙞𝙘𝙖𝙣𝙙𝙤 𝙣𝙤 𝙇𝙞𝙣𝙠 𝙖𝙗𝙖𝙞𝙭𝙤👇 \n\n wa.me/${global.owner}\n\n`)
break


    
        
        
        default:
			

    
                }
                

    } catch (err) {
        console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado= ${__filename}`))
	delete require.cache[file]
	require(file)
})
