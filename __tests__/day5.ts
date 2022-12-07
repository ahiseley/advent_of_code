import { part1, part2 } from '../challenges/day5'
import * as fs from 'fs'
import path from 'path'

const input = fs.readFileSync(
  path.join(__dirname, '../challenges', 'day5/input.txt'),
  'utf8'
)

test('part 1', () => {
  expect(part1(input)).toEqual('CFFHVVHNC')
})

test('part 2', () => {
  expect(part2(input)).toEqual('FSZWBPTBG')
})
