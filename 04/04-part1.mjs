import * as fs from 'fs'

function parse() {
  const file = fs.readFileSync('04-input.txt', {encoding: 'utf8'}).trim();
  let lines = file.split('\n');
  const pairs = lines.map((line) => {
    let pair = line.split(',')
    pair = pair.map((elf) => {
      return elf.split('-').map((numString) => parseInt(numString))
    })
    return pair
  })
  
  return pairs
}

function isFullyContained([[firstStart, firstEnd], [secondStart, secondEnd]]) {
  const fullyContained = (firstStart >= secondStart && firstEnd <= secondEnd) ||
    (secondStart >= firstStart && secondEnd <= firstEnd)
  console.log({firstStart, firstEnd, secondStart, secondEnd, fullyContained})

  return fullyContained
}

const pairs = parse();
// console.log(pairs)

const fullyContained = pairs.map(isFullyContained)
console.log(fullyContained)
const count = fullyContained.filter((contained) => contained).length
console.log(count)
