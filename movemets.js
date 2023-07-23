function rookMovement() {
  
}

function pawnMovement(pieceName, piece) {
  let pieceColor = pieceName.slice(0, 5)
  let piecePosition = utils.findPosition(piece)
  console.log(pieceColor)
  
  if (clash.pawn(piecePosition, pieceColor) === true){
    if (pieceColor === "white") {
      piece.style.top = `${piecePosition[0] + 12.5}%`
    } else {
      piece.style.top = `${piecePosition[0] - 12.5}%`
    }
  }


return "pawn"
}