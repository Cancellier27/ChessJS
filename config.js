let rookL = document.querySelector(".blackRookLeft")
let rookR = document.querySelector(".blackRookRight")


function move(classElement) {
  let piece = document.querySelector(classElement)
  piece.style.border = "solid red 4px"
  
  let piecePosition = findPosition(piece)

  if (piecePosition[0] === 87.5) {
    return 
  }
  console.log(piece.getAttribute("name"))

  piece.style.top = `${piecePosition[0] + 12.5}%`
  return
}