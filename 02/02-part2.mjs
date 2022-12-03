import * as fs from 'fs'

function parse() {
  const file = fs.readFileSync('02-input.txt', {encoding: 'utf8'}).trim()

  return file.split('\n').map((line) => {
    return line.split(' ')
  })
}

const leftMap = {
  A: 0, // R
  B: 1, // P
  C: 2  // S
}

const rightMap = {
  X: 'L',
  Y: 'D',
  Z: 'W'
}

const outcomeScoreMap = {
  L: 0,
  D: 3,
  W: 6
}

function scoreRound(round) {
  const [opponent, outcome] = round;
  const outcomeScore = outcomeScoreMap[outcome];

  let me
  switch (outcome) {
    case 'L':
      me = (opponent + 2) % 3
      break;
    case 'D':
      me = opponent
      break;
    case 'W':
      me = (opponent + 1) % 3
      break;
  }
  let shapeScore = me + 1

  const total = shapeScore + outcomeScore

  console.log({opponent, outcome, outcomeScore, me, shapeScore, total})

  return total
}

let rounds = parse()
rounds = rounds.map((round) => {
  return [leftMap[round[0]], rightMap[round[1]]]
})
rounds = rounds.map(scoreRound)
console.log(rounds)

const sum = rounds.reduce((acc, cur) => acc + cur)
console.log(sum)
