/*
  Player Logic:
  - Decide player's mark ("x" or "o")
*/

const MARKS = ['x', 'o']

const build = (_isAI) => {
  // Player with marker 'x' goes first
  let markerIdx = Math.round(Math.random())

  return [
    {
      name: 'Player 1',
      marker: MARKS[markerIdx === 0 ? 0 : 1]
    },
    {
      name: _isAI === 'y' ? 'AI' : 'Player 2',
      marker: MARKS[markerIdx === 0 ? 1 : 0]
    }
  ]
}

const currentPlayer = (players, turn) => players.find(_player => _player.marker === turn);

exports.build = build
exports.currentPlayer = currentPlayer
