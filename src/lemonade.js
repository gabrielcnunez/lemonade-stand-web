let lemonJuiceLabel = document.getElementById("lemonJuiceLabel")
console.log(lemonJuiceLabel)
lemonJuiceLabel.innerHTML = "<p> Hello </p>"

const example = (string) => {
  console.log(string)
}

let incrementButtons = $(".increment")[1]
console.log(incrementButtons)

incrementButtons.addEventListener("click", (event) => {
  const namedDiv = event.composedPath
    ? event.composedPath()[2]
    : event.currentTarget.closest(".row")
  console.log(namedDiv)
  switch (namedDiv.getAttribute("name")) {
    case "lemon-juice":
      console.log("Lemon Juice Div")
      break
    case "water":
      console.log("Water Div")
      break
    case "sugar":
      console.log("Sugar Div")
      break
    case "ice":
      console.log("Ice Div")
      break
    default:
      console.log("Not sure where you are!")
  }
})
