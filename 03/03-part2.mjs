import * as fs from 'fs'
import * as _ from 'lodash'

function parse() {
  const file = fs.readFileSync('03-input.txt', {encoding: 'utf8'}).trim()
  const lines = file.split('\n')

  return _.chunk(lines, 3)
}

function priority(group) {
  const intersection = _.intersection(group[0].split(''), group[1].split(''), group[2].split(''))[0]
  const charCode = intersection.charCodeAt(0)

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
