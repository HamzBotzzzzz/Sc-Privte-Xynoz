/*
Script By Xynoz 📮
No Enc? Chat wa.me/6283839200413
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      

/*============== INFO OWNER ==============*/
global.sig = 'https://instagram.com/hamzz_jr'
global.sgh = 'https://github.com/HamzBotzzzzz'
global.sgc = 'https://chat.whatsapp.com/FdP0znFDbNWKkleGN6bhxxhttps://chat.whatsapp.com/FdP0znFDbNWKkleGN6bhxx'
global.swa = 'wa.me/6288214989352'

/*============== PAYMENT ==============*/
global.pdana = '088214989352'
global.povo = '088214989352'
global.pgopay = '088214989352'
global.ppulsa = '088214989352'
global.ppulsa2 = '0881023363385'
global.psaweria = 'https://saweria.co/ZxynnBotz'

/*============== NOMOR ==============*/
global.nomorbot = '48699521417'
global.nomorown = '6288214989352'
global.namebot = 'ZxynnBoTz-MD'
global.nameown = 'I L H A M'


/*============== STAFF ==============*/
global.owner = [
  ['6288214989352', 'I L H A M', 'true']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Xynoz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

/*============== WATERMARK ==============*/
global.wm = 'ZxynnBoTz-MD | ʙу IlhamGanz' //Main Watermark
global.wm2 = 'ZxynnBoTz-MD'
global.wm3 = 'ZxynnBoTz-MD | ʙу IlhamGanz'
global.botdate = `⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}\n⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `⻝ 𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = `📮 IlhamGanteng??? | By ${global.nameown}`
global.author = 'IlhamGanz✍' 


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg'
global.giflogo = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg'
global.thumbs = ['https://telegra.ph/file/a94ebededebcbc792a12a.jpg']
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```𝙇𝙤𝙖𝙙𝙞𝙣𝙜...```'
global.eror = '```𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 𝟰𝟬𝟰 𝙀𝙧𝙤𝙧```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/be753b5f756c77b41a47b.jpghttps://telegra.ph/file/be753b5f756c77b41a47b.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.cmenut = '––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊☃︎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '' //after
global.pmenus = '☃︎' //pembatas menu selector

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '❃' //hiasan Doang :v

/*============== STICKER WM ==============*/
global.stickpack = 'ZxynnBoTz-MD'
global.stickauth = `By IlhamGanz`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
