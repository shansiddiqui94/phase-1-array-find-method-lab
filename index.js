// code your solution here
function superbowlWin(record) {
    const winningGame = record.find(function(game) {
      return game.result === "W";
    });
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }