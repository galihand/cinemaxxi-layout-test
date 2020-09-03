function cancelation(seat, layout) {
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
      if (layout[index].status === 'free') {
        status = 'fail'
        message = 'Belum ada yang memesan kursi ini\n'
      } else {
        layout[index].status = 'free'
        layout[index].datebook = Date.now()
        message = `cancel booking seat ${seat} success\n`
        status = 'success'
      }
    }
  }

  return { status, message, layout }
}

module.exports = cancelation
