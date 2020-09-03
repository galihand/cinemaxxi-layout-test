const menu = require('./controllers/menu')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})


function main() {
  let layout = []
  console.log('============== Selamat Datang (Cinema XXI), Silahkan masukkan konfigurasi denah studio ===============')
  rl.question('Masukkan Label Kursi: ', label => {
    if (!label.match(/^[A-Z]*$/) || label == '' || label.length > 1) {
      console.clear()
      console.log('Label harus berupa 1 huruf besar\n\n')
      main()
    } else {
      rl.question('Masukkan Jumlah Kursi: ', jumlah => {
        if (!jumlah.match(/^[0-9]*$/) || +jumlah > 20 || +jumlah <= 0) {
          console.clear()
          console.log('Jumlah harus berupa angka lebih dari 0 dan tidak lebih dari 20\n\n')
          main()
        } else {
          for (let i = 1; i <= jumlah; i++) {
            layout.push({
              seat: `${label}${i}`,
              status: 'free',
              datebook: null
            })
          }
          console.clear()
          return menu(label, jumlah, layout)
        }
      })
    }
  })
}

console.clear()
main()