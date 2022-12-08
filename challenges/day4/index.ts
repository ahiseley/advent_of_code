function part1(data: string): number {
  let pairs = data.split('\n')
  let count = 0
  for (let pair of pairs) {
    const [prev, curr] = pair.split(',')
    const [prevStart, prevEnd] = prev.split('-')
    const [currStart, currEnd] = curr.split('-')
    if (
      (Number(prevStart) <= Number(currStart) &&
        Number(prevEnd) >= Number(currEnd)) ||
      (Number(currStart) <= Number(prevStart) &&
        Number(currEnd) >= Number(prevEnd))
    )
      count++
  }

  return count
}

function part2(data: string): number {
  let pairs = data.split('\n')
  let count = 0
  for (let pair of pairs) {
    const [prev, curr] = pair.split(',')
    const [prevStart, prevEnd] = prev.split('-')
    const [currStart, currEnd] = curr.split('-')
    if (
      (Number(prevStart) <= Number(currStart) &&
        Number(prevEnd) >= Number(currStart)) ||
      (Number(currStart) <= Number(prevStart) &&
        Number(currEnd) >= Number(prevStart))
    )
      count++
  }

  return count
}

export { part1, part2 }
