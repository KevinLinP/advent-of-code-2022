import * as fs from 'fs'
import * as _ from 'lodash'

function parse() {
  const file = fs.readFileSync('03-input.txt', {encoding: 'utf8'}).trim()

  return file.split('\n').map((line) => {
    const half = line.length / 2
    const first = line.slice(0, half)
    const second = line.slice(half)

    // console.log({line, length: line.length, half, first, second})

    return [first, second]
  })
}

function priority(bag) {
  const [first, second] = bag
  const intersection = _.intersection(first.split(''), second.split(''))[0]
  const charCode = intersection.charCodeAt(0)

  let score
  if (charCode <= 90) {
    // uppercase
    score = charCode - ( 64 - 26)
  } else {
    score = charCode - 96;
  }

  console.log({first, second, intersection, charCode, score})

  return score;
}

let bags = parse();
bags = bags.map(priority)

console.log(bags)

const total = bags.reduce((acc, cur) => acc + cur)

console.log(total)
