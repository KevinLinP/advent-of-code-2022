import * as fs from 'fs'

function parseStacks(lines) {
  const stacks = {}

  lines.forEach((line, i) => {
    const stackId = line[0]
    const crates = line.slice(1).split('')
    stacks[stackId] = crates
  })

  return stacks
}

function parseSteps(lines) {
  const regex = /move (\d+) from (\d+) to (\d+)/

  const steps = lines.map((line) => {
    let [num, from, to] = line.match(regex).slice(1)
    num = parseInt(num)

    return { num, from, to }
  })

  return steps
}

function parse() {
  const file = fs.readFileSync('05-input-preprocessed.txt', {encoding: 'utf8'}).trim()
  let lines = file.split('\n')

  const stacks = parseStacks(lines.slice(0, 9))
  const steps = parseSteps(lines.slice(9))

  return {stacks, steps}
}

let {stacks, steps} = parse()

console.log(stacks)
console.log(steps)

steps.forEach((step) => {
  const {num, from, to} = step
  console.log({stacks, step})
  console.log('')

  const top = stacks[from].splice(-1 * num)

  stacks[to] = stacks[to].concat(top)
})

console.log(stacks)

const tops = Object.values(stacks).map((stack) => {
  return stack[stack.length - 1]
}).join('')

console.log(tops)
