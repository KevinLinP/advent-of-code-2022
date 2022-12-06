import * as fs from 'fs'

function parseStacks(lines) {
  const stacks = [[]]

  lines.forEach((line) => {
    const crates = line.slice(1).split('')
    stacks.push(crates)
  })

  return stacks
}

function parseSteps(lines) {
  const regex = /move (\d+) from (\d+) to (\d+)/

  const steps = lines.map((line) => {
    const [_, num, from, to] = line.match(regex)
    return {num, from, to}
  })

  return steps
}

function parse() {
  const file = fs.readFileSync('05-input-preprocessed.txt', {encoding: 'utf8'}).trim()
  let lines = file.split('\n')

  const stacks = parseStacks(lines.slice(0, 9))
  const steps = parseSteps(lines.slice(10))

  return {stacks, steps}
}

const {stacks, steps} = parse()

console.log(stacks, steps)
