//ubah nomor owner dan wm di sini

const fs = require("fs")
const chalk = require("chalk")
global.owner = ["6283850055745"]
global.ownernomer = "6283850055745"
global.premium = ["6283850055745"]
global.packname = "Sticker By"
global.author = "RYZSTORE"
global.jumlha = "999"
global.jumhal = "100000000000000"
global.jumlah = "1000000000"
global.prefa = ["", "!", ".", "#", "&"]
global.sp = ""
global.mess = {
  success: "Done ✓",
  admin: "Fitur Khusus Admin Group!",
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
  premime: "*FITUR KHUSUS PREMIUM / SEWA BOT, SILAKAN HUBUNGI OWNER*",
  owner: "Fitur Khusus Owner Bot",
  group: "Fitur Digunakan Hanya Untuk Group!",
  private: "Fitur Digunakan Hanya Untuk Private Chat!",
  bot: "Fitur Khusus Pengguna Nomor Bot",
  wait: "Loading...",
  error: "Error!",
  errapi: "Error Mungkin Apikey Tidak Valid!",
  errmor: "Error Kesalahan Sistem",
  endLimit: "Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12",
}
global.limitawal = {
  premium: "Infinity",
  free: 100,
}
global.thumb = fs.readFileSync("./media/image/tio.jpg")
global.faall = fs.readFileSync("./media/image/fake.jpg")
global.mygit = "https://github.com/RYZSTORE"
global.webmy = "https://ryzstoree.com"
global.ghme = "https://github.com/RYZSTORE"
global.botname = "RYZSTORE"
global.omlen = "RYZSTORE"
global.weem = "RYZSTORE"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
})
