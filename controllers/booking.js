function booking(seat, layout) {
  let message
  let status

  if (!seat) {
    message = 'seat_code tidak boleh kosong\n'
    status = 'fail'
  } else {
    let index = layout.findIndex(i => i.seat === seat)
    if (index < 0) {
      message = 'seat_code yang anda masukkan tidak sesuai\n'
      status = 'fail'
    } else {
      if (layout[index].status === 'sold') {
        status = 'fail'
        message = 'Kursi sudah dipesan orang lain\n'
      } else {
        layout[index].status = 'sold'
        layout[index].datebook = Date.now()
        message = `Booking seat ${seat} success\n`
        status = 'success'
      }
    }
  }

  return { status, message, layout }
}

module.exports = booking
