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
  X: 0, // R
  Y: 1, // P
  Z: 2  // S
}

function scoreRound(round) {
  const [opponent, me] = round;
  const shapeScore = me + 1;

  let outcomeScore
  if (opponent === me) {
    outcomeScore = 3;
  } else if ((opponent + 1) % 3 === me) {
    outcomeScore = 6;
  } else {
    outcomeScore = 0
  }

  return shapeScore + outcomeScore
}

let rounds = parse()
rounds = rounds.map((round) => {
  return [leftMap[round[0]], rightMap[round[1]]]
})
rounds = rounds.map(scoreRound)
console.log(rounds)

const sum = rounds.reduce((acc, cur) => acc + cur)
console.log(sum)
