function status(layout) {
  let status = '=============== Denah Status ===============\n'
  layout.forEach(i => {
    status += `\n${i.seat} - ${i.status}`
  });
  status += '\n\n'

  return status
}

module.exports = status
