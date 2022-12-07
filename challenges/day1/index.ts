function part1(data: string): number {
  let cals = data.split('\n')
  let calsByElf: number[] = [],
    idx = 0,
    max = 0
  for (let i of cals) {
    if (i === '') idx++
    else {
      calsByElf[idx] = (calsByElf[idx] || 0) + Number(i)
      max = Math.max(max, calsByElf[idx])
    }
  }
  return max
}

function part2(data: string): number {
  let cals = data.split('\n')
  let calsByElf: number[] = [],
    idx = 0,
    sumOfThreeGreatest = 0
  for (let i of cals) {
    if (i === '') idx++
    else calsByElf[idx] = (calsByElf[idx] || 0) + Number(i)
  }
  calsByElf.sort((a, b) => b - a)
  for (let i = 0; i < 3; i++) {
    sumOfThreeGreatest += calsByElf[i]
  }
  return sumOfThreeGreatest
}

export { part1, part2 }
