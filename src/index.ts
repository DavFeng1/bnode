import repl from 'node:repl'
import boxen, { Options as BoxenOptions } from 'boxen'

const options: BoxenOptions = {
  padding: 1,
  borderColor: 'blueBright'
}

const box = boxen('hello world', options)

console.log(box)

