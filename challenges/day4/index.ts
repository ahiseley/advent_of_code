function part1(data: string): number {
  let pairs = data.split('\n').map(pair => pair.split(','))
  let cleanedPairs = pairs.map(pair =>
    pair.map(assignment => assignment.split('-'))
  )

  let count = 0
  for (let i = 0; i < cleanedPairs.length; i++) {
    const pair = cleanedPairs[i]
    const [prevStart, prevEnd] = pair[0]
    const [currStart, currEnd] = pair[1]
    if (
      Number(prevStart) <= Number(currStart) &&
      Number(prevEnd) >= Number(currEnd)
    )
      count++
    else if (
      Number(currStart) <= Number(prevStart) &&
      Number(currEnd) >= Number(prevEnd)
    )
      count++
  }

  return count
}

function part2(data: string): number {
  let pairs = data.split('\n').map(pair => pair.split(','))
  let cleanedPairs = pairs.map(pair =>
    pair.map(assignment => assignment.split('-'))
  )

  let count = 0
  for (let i = 0; i < cleanedPairs.length; i++) {
    const pair = cleanedPairs[i]
    const [prevStart, prevEnd] = pair[0]
    const [currStart, currEnd] = pair[1]
    if (
      Number(prevStart) <= Number(currStart) &&
      Number(prevEnd) >= Number(currStart)
    )
      count++
    else if (
      Number(currStart) <= Number(prevStart) &&
      Number(currEnd) >= Number(prevStart)
    )
      count++
  }

  return count
}

export { part1, part2 }
