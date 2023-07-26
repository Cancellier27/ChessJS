function rookMovement() {
  
}

function pawnMovement(pieceName, piece) {
  piece.style.border = "solid red 4px"

  let pieceColor = pieceName.slice(0, 5)
  let piecePosition = utils.findPosition(piece)
  let possibleMovements = []

  // find what are the possible movements, get the board coordinate for them,
  //add a class to get the border around, add a function onClick on them

  if (clash.pawn(piecePosition, pieceColor) === true){
    if (pieceColor === "white") {
      possibleMovements = [[piecePosition[0] + 12.5, piecePosition[1]]]
      // piece.style.top = `${piecePosition[0] + 12.5}%`
      possibleMovements.forEach(m => {
        let coordinate = utils.boardCoordinate(m)
        let boardSquare = document.querySelector(`.${coordinate}`)
        boardSquare.classList.add("movementAllowed")
        boardSquare.onclick = async () => await utils.movePiece(piece, utils.boardCoordinate(coordinate, 1))
      })

    } else {
      // piece.style.top = `${piecePosition[0] - 12.5}%`
      possibleMovements = [[piecePosition[0] - 12.5, piecePosition[1]]]
      possibleMovements.forEach(m => {
        let coordinate = utils.boardCoordinate(m)
        let boardSquare = document.querySelector(`.${coordinate}`)
        boardSquare.classList.add("movementAllowed")
        boardSquare.onclick = async () => await utils.movePiece(piece, utils.boardCoordinate(coordinate, 1))
      })
    }
  }

  piece.style.border = "none"
return "pawn"
}