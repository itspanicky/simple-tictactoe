/* Initiate new game */
const readline = require('readline')
const game = require('./game.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const initialize = () => {
  rl.question('Do you want to play a game of tic-tac-toe? (y/n)', (answer) => {
  
    if (answer === 'y') {
      rl.question('Do you want to play with an ai? (y/n)', (isAI) => {
        console.log(`Starting game...`)
        game.start(rl, isAI)
      })

    } else {
      console.log(`Goodbye`)
      rl.close()
    }
  })
}

initialize()