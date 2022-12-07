import { part1, part2 } from '../challenges/day3'
import * as fs from 'fs'
import path from 'path'

const input = fs.readFileSync(
  path.join(__dirname, '../challenges', 'day3/input.txt'),
  'utf8'
)

test('part 1', () => {
  expect(part1(input)).toEqual(8515)
})

test('part 2', () => {
  expect(part2(input)).toEqual(2434)
})
