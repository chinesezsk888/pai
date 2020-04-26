
function formatDuration (val) {
  let zhengVal = Math.floor(val)
  let hour = ''
  let minute = ''
  let second = ''
  let hournum = parseInt(zhengVal / 3600)
  let minutenum = parseInt((zhengVal - (hournum * 3600)) / 60)
  if (hournum > 0 && hournum < 10) {
    hour = '0' + hournum + ':'
  } else if (hournum === 0) {
    hour = ''
  } else {
    hour = hournum + ':'
  }
  if (minutenum > 0 && minutenum < 10) {
    minute = '0' + minutenum + ':'
  } else if (minutenum === 0) {
    minute = '00' + ':'
  } else {
    minute = minutenum + ':'
  }
  second = (zhengVal - (hournum * 3600)) % 60
  if (second > 0 && second < 10) {
    second = '0' + second
  } else if (second === 0) {
    second = '00'
  }
  return hour + minute + second
}

export { formatDuration }
