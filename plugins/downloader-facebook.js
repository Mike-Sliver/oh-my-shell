
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `and the link?  enter a link from facebook\n\n📌 Example :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
╭━─━─━─≪💖≫─━─━─━╮
┆*FBDL*
┆——————«•»——————
┆💚 *Quality:* ${result.quality}
╰━─━─━─≪💝≫─━─━─━╯`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
     m.react(done)
 } catch {
 	m.reply('Error: Try again with another link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
