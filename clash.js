const clash = {
  pawn(piecePosition, pieceColor) {
    let canMove = true
    let futurePiecePosition
    if (pieceColor === "white" & piecePosition[0] !== 87.5) {
     futurePiecePosition = [piecePosition[0] + 12.5, piecePosition[1]]
    } else if (pieceColor === "black" & piecePosition[0] !== 0) {
      futurePiecePosition = [piecePosition[0] - 12.5, piecePosition[1]]
    } else {
      return false
    }

    let boardPieces = document.querySelectorAll(".piece")
  
    boardPieces.forEach(piece => {
      if (futurePiecePosition === utils.findPosition(piece)) {
        canMove = false
      } 
    })

    return canMove
  },
  rook(piecePosition, pieceColor) {
    let canMove = true
    let futurePiecePosition
    
    if (pieceColor === "white") {
     futurePiecePosition = [piecePosition[0] + 12.5, piecePosition[1]]
    } else {
      futurePiecePosition = [piecePosition[0] - 12.5, piecePosition[1]]
    }

    let boardPieces = document.querySelectorAll(".piece")
  
    boardPieces.forEach(p => {
      if (futurePiecePosition[0] == utils.findPosition(p)[0]) {
        canMove = false
      } 
    })
    return canMove
  },
}