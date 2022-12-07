function part1(data: string): number {
  let rucksacks = data.split('\n'),
    sum = 0

  for (let rucksack of rucksacks) {
    let r = rucksack.length / 2
    let lSet = new Set(),
      rSet = new Set(),
      commonItem = ''
    for (let l = 0; r < rucksack.length; l++, r++) {
      const lVal = rucksack[l],
        rVal = rucksack[r]

      lSet.add(lVal)
      rSet.add(rVal)

      if (lSet.has(rVal)) commonItem = rVal
      else if (rSet.has(lVal)) commonItem = lVal

      if (commonItem !== '') break
    }
    sum += getSumFromItem(commonItem)
  }
  return sum
}

function getSumFromItem(item: string): number {
  let charCode = item.charCodeAt(0)
  // capital
  if (charCode < 97) charCode -= 65 - 27
  // lowercase
  else charCode -= 96
  return charCode
}

function part2(data: string): number {
  let rucksacks = data.split('\n'),
    sum = 0

  let set1 = new Set(),
    set2 = new Set(),
    currSet = 1
  for (let i = 0; i < rucksacks.length; i++, currSet++) {
    for (let char of rucksacks[i]) {
      if (currSet === 1) set1.add(char)
      else if (currSet === 2) set2.add(char)
      else {
        // (currSet === 3)
        if (set1.has(char) && set2.has(char)) {
          sum += getSumFromItem(char)
          // reset
          set1.clear()
          set2.clear()
          currSet = 0
          break
        }
      }
    }
  }

  return sum
}

export { part1, part2 }
