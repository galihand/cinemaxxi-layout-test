const booking = require('./booking')
const status = require('./status')
const transaction = require('./transaction')
const cancelation = require('./cancelation')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

function menu(label, jumlah, layout) {

  console.log(`=============== Aplikasi Cinema XXI Layout (Kursi tersedia ${label}-${jumlah}) ===============`)
  console.log('=============== Pilih salah satu menu di bawah ini ===============\n')
  console.log('A) Pemesanan Kursi => book_seat {seat_code}')
  console.log('B) Batalkan Kursi => cancel_seat {seat_code}')
  console.log('C) Laporan Denah => seats_status')
  console.log('D) Laporan Transaksi => transaction_status\n')
  console.log(`Masukkan 'Exit' untuk keluar \n`)

  rl.question('Masukkan: ', answer => {
    let code = answer.split(' ')
    switch (code[0]) {
      case 'book_seat':
        let book = booking(code[1], layout)
        if (book.status === 'fail') {
          console.clear()
          console.log(book.message)
          menu(label, jumlah, layout)
        } else {
          console.clear()
          console.log(book.message)
          menu(label, jumlah, book.layout)
        }
        break
      case 'cancel_seat':
        let cancel = cancelation(code[1], layout)
        if (cancel.status === 'fail') {
          console.clear()
          console.log(cancel.message)
          menu(label, jumlah, layout)
        } else {
          console.clear()
          console.log(cancel.message)
          menu(label, jumlah, cancel.layout)
        }
        break
      case 'seats_status':
        console.clear()
        console.log(status(layout))
        menu(label, jumlah, layout)
        break
      case 'transaction_status':
        console.clear()
        console.log(transaction(layout))
        menu(label, jumlah, layout)
        break
      case 'Exit':
        console.clear()
        console.log('=============== Terima Kasih ===============')
        rl.close()
        break
      default:
        console.clear()
        console.log('Pilihan tidak tersedia. Masukkan pilihan yang benar\n')
        menu(label, jumlah, layout)
        break
    }
  })
}

module.exports = menu
