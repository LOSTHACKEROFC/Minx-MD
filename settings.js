//═══════════════════════════════════════════════════════//
//TALHA and arisha
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//c719318f84\\
global.APIKeys = {
	'https://zenzapis.xyz': 'c719318f84', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['919536476115']
global.premium = ['919536476115']
global.ownernomer = '919536476115'
global.ownername = 'CHIRAG YOUTUBER'
global.botname = 'DEVIL BOT'
global.footer = '𝑩𝑶𝑻 𝑩𝒀 𝑪𝑯𝑰𝑹𝑨𝑮 𝒀𝑶𝑼𝑻𝑼𝑩𝑬𝑹'
global.ig = 'https://Instagram.com/chirag__bhatnagar'
global.region = 'UTTRAKHAND,INDIA'
global.sc = 'https://youtube.com/c/chiragyoutuber'
global.myweb = 'https://Instagram.com/chirag__bhatnagar'
global.packname = '┼☪⚔♱☻☹♞♯.𝐃𝐄𝐕𝐈𝐋 𝐁𝐎𝐓.♯♞☹☻♱⚔☪┼'
global.author = '𝐂𝐇𝐈𝐑𝐀𝐆 𝐘𝐎𝐔𝐓𝐔𝐁𝐄𝐑'
global.sessionName = 'session'
global.prefa =  ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In Process...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./MinxMedia/Minx.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
