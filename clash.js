const clash = {
  pawn(piecePosition, pieceColor) {
    let test = true
    let futurePiecePosition
    if (pieceColor === "white") {
     futurePiecePosition = [piecePosition[0] + 12.5, piecePosition[1]]
    } else {
      futurePiecePosition = [piecePosition[0] - 12.5, piecePosition[1]]
    }

    let boardPieces = document.querySelectorAll(".piece")
  
    boardPieces.forEach(p => {
      if (futurePiecePosition[0] == utils.findPosition(p)[0]) {
        test = false
      } 
    })
    return test
  },
}