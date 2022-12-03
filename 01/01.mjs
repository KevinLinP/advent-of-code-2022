import * as fs from 'fs'
import * as readline from 'readline'

function parseElves() {
  const file = fs.readFileSync('01-input.txt', {encoding: 'utf8'}).trim()

  let elfStrings = file.split('\n\n')
  let elves = elfStrings.map((elfString) => {
    const numStrings = elfString.split('\n')
    const nums = numStrings.map((numString) => {
      return parseInt(numString)
    })

    return nums
  })

  console.log(elves)

  return elves;
}

const elves = parseElves()
const elfTotals = elves.map((elf) => {
  return elf.reduce((acc, current) => acc + current)
})

console.log(elfTotals)

const max = elfTotals.reduce((acc, current) => acc > current ? acc : current)
console.log(max)

const maxThree = elfTotals.sort((a, b) => a > b).slice(-3)
console.log(maxThree)
const sum = maxThree.reduce((acc, current) => acc + current)
console.log(sum)
