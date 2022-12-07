function part1(data: string): number {
  let rounds = data.split('\n').map(round => round.split(' '))
  let myScore = 0

  const win = {
    A: 'Y',
    B: 'Z',
    C: 'X',
  }
  const draw = {
    A: 'X',
    B: 'Y',
    C: 'Z',
  }
  const score = {
    X: 1,
    Y: 2,
    Z: 3,
  }

  for (let [opp, me] of rounds) {
    if (win[opp] === me) myScore += 6
    else if (draw[opp] === me) myScore += 3
    myScore += score[me]
  }

  return myScore
}

function part2(data: string): number {
  let rounds = data.split('\n').map(round => round.split(' '))
  let myScore = 0
  // [lose/draw/win] organized by idx
  const choice = {
    A: ['C', 'A', 'B'],
    B: ['A', 'B', 'C'],
    C: ['B', 'C', 'A'],
  }
  const choiceScore = { A: 1, B: 2, C: 3 }
  const resScore = {
    X: 0,
    Y: 3,
    Z: 6,
  }

  for (let [opp, res] of rounds) {
    let idx = 0
    if (res === 'X') idx = 0
    else if (res === 'Y') idx = 1
    else idx = 2
    myScore += choiceScore[choice[opp][idx]] + resScore[res]
  }

  return myScore
}

export { part1, part2 }
