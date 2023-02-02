const getNormallyDistWorkTime = (stdDevMinutes = 20, start = '07:45', lunchStart = '12:00', lunchEnd = '12:30', end) => {
  const toLowerBound = (min, fn) => {
    let res
    do res = fn()
    while(res < min)
    return res
  }
  const boxMullerTransform = () => Math.sqrt(-2 * Math.log(Math.random())) * Math.cos((2 * Math.PI) * Math.random())
  const getNormallyDistributedNumber = (mean, stddev) => boxMullerTransform() * stddev + mean
  const pad = s => s.toString(10).padStart(2, '0')
  const strToMin = str => parseInt(str.split(':')[0] * 60) + parseInt(str.split(':')[1])
  const minToStr = mins => [Math.floor(mins / 60), mins % 60].map(pad).join(':')
  const nas = str => Math.floor(getNormallyDistributedNumber(strToMin(str), stdDevMinutes))
  const minLength = (new Date().getDay() < 5 ? 8 : 6) * 60
  end = end || minToStr(strToMin(start) + minLength)
  const ws = toLowerBound(strToMin('07:00'), () => nas(start))
  const ls = nas(lunchStart)
  const le = toLowerBound(ls + 30, () => nas(lunchEnd))
  const we = toLowerBound(ws+(le-ls)+minLength-(stdDevMinutes/4), () => nas(end))
  const res = { morning: [ws, ls].map(minToStr), lunch: [ls, le].map(minToStr), afternoon: [le, we].map(minToStr)} 
  console.table(Object.entries(res).reduce((a,[key, val]) => ({ ...a, [key]: {start: val[0], end:val[1]}}), {}))
  console.log('total:', `${minToStr(we-ws-(le-ls)).replace(':', 'h ') + 'm'}`)
  return res
}

getNormallyDistWorkTime(20, '08:00', '12:00', '12:30')
