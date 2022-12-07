function part1(data: string): string {
  let rulesText = data.split('\n')
  let stacks: { string: string[] } = JSON.parse(rulesText.shift())
  let rules = rulesText.map(rule => rule.split(/(\d+)/))
  let res = []
  for (let rule of rules) {
    let numToMove = Number(rule[1])
    let from = rule[3],
      to = rule[5]
    while (numToMove > 0) {
      stacks[to].push(stacks[from].pop())
      numToMove--
    }
  }
  for (let i = 1; i < 10; i++) res.push(stacks[i].pop())
  return res.join('')
}

function part2(data: string): string {
  let rulesText = data.split('\n')
  let stacks: { string: string[] } = JSON.parse(rulesText.shift())
  let rules = rulesText.map(rule => rule.split(/(\d+)/))
  let res = []
  for (let rule of rules) {
    let numToMove = Number(rule[1])
    let from = rule[3],
      to = rule[5],
      tempStack = []
    while (numToMove > 0) {
      tempStack.push(stacks[from].pop())
      numToMove--
    }
    while (tempStack.length > 0) stacks[to].push(tempStack.pop())
  }
  for (let i = 1; i < 10; i++) res.push(stacks[i].pop())
  return res.join('')
}

export { part1, part2 }
