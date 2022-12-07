function part1(data: string): number {
  let map = new Map(),
    l = 0,
    r = 0
  while (r < 4) map.set(data[r], (map.get(data[r++]) || 0) + 1)

  while (r < data.length) {
    map.set(data[r], (map.get(data[r++]) || 0) + 1)
    if (map.get(data[l]) === 1) map.delete(data[l++])
    else map.set(data[l], map.get(data[l++]) - 1)
    if (map.size === 4) return r
  }
}

function part2(data: string): number {
  let map = new Map(),
    l = 0,
    r = 0
  while (r < 14) map.set(data[r], (map.get(data[r++]) || 0) + 1)

  while (r < data.length) {
    map.set(data[r], (map.get(data[r++]) || 0) + 1)
    if (map.get(data[l]) === 1) map.delete(data[l++])
    else map.set(data[l], map.get(data[l++]) - 1)
    if (map.size === 14) return r
  }
}

export { part1, part2 }
