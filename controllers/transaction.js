function transaction(layout) {
  let free = 0
  let sold = 0
  let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  let result = ''

  layout.forEach(i => {
    if(i.status === 'sold'){
      let date = new Date(i.datebook)
      let tmp = `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      sold++
      result += `${i.seat}, ${tmp}\n`
    }else{
      free++
    }
  })

  return `=============== Denah Status ===============\n\nTotal ${free} free, ${sold} sold, format (seat_code, datetime)\n\n${result}`
}

module.exports = transaction
