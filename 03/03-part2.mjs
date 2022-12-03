import * as fs from 'fs'
import * as _ from 'lodash'

function parse() {
  const file = fs.readFileSync('03-input.txt', {encoding: 'utf8'}).trim()
  const lines = file.split('\n')

  return _.chunk(lines, 3)
}

function priority(group) {
  const lineChars = group.map((line) => line.split(''))
  const intersection = _.intersection(...lineChars)
  const charCode = intersection[0].charCodeAt(0)

  let score
  if (charCode <= 90) {
    // uppercase
    score = charCode - ( 64 - 26)
  } else {
    score = charCode - 96;
  }

  console.log({intersection, charCode, score})

  return score;
}

let groups = parse();
console.log(groups)

const scores = groups.map(priority)
console.log(scores)

const sum = _.sum(scores)
console.log(sum)
