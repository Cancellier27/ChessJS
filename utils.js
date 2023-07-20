function findPosition(className) {
let minPosition = document.querySelector(".minPosition")
let maxPosition = document.querySelector(".maxPosition")

let rectMin = minPosition.getBoundingClientRect()
let rectMax = maxPosition.getBoundingClientRect()

let top = rectMax.top - rectMin.top  // 87.5%
let left = rectMax.left - rectMin.left // 87,5%
// console.log(top)

let rect = className.getBoundingClientRect()

let elementTopPercentage = ((rect.top - rectMin.top) * 87.5) / top
let elementLeftPercentage = ((rect.left - rectMin.left) * 87.5) / left

return [elementTopPercentage, elementLeftPercentage]
}

