let rookL = document.querySelector(".blackRookLeft")
let rookR = document.querySelector(".blackRookRight")


function move(classElement) {
  let piece = document.querySelector(classElement)
  let pieceName = piece.getAttribute("name")
  
  
 

  

  // if (piecePosition[0] === 87.5) {
  //   return 
  // }
  // console.log(piece.getAttribute("name"))

  if (pieceName === "blackPawn" || pieceName === "whitePawn") {
    pawnMovement(pieceName, piece)
  }

  

  // piece.style.top = `${piecePosition[0] + 12.5}%`
  return
}