let state = {
  lemonJuice: {
    amount: 0,
    max: 8,
    measurement: "ounces",
  },
  water: {
    amount: 0,
    max: 8,
    measurement: "ounces",
  },
  sugar: {
    amount: 0,
    max: 12,
    measurement: "tablespoons",
  },
  ice: {
    amount: 0,
    max: 15,
    measurement: "cubes",
  },
}

const calcPercent = (amount, max, maxFill = 100) =>
  100 - (amount / max) * maxFill

const render = ({ lemonJuice, water, sugar, ice }) => {
  $("#lemonJuice").css(
    "transform",
    `translate(0, ${calcPercent(lemonJuice.amount, lemonJuice.max)}%)`
  )
  $("#water").css(
    "transform",
    `translate(0, ${calcPercent(water.amount, water.max)}%)`
  )
  $("#sugar").css(
    "transform",
    `translate(0, ${calcPercent(sugar.amount, sugar.max, 40)}%)`
  )
  $('#iceBox').html(Array(ice.amount).fill(undefined).map(_ => "<img class='ice' src='../img/ice.svg' alt='Ice Cube' />"))
  $("#lemonJuiceValue").html(lemonJuice.amount + " " + lemonJuice.measurement)
  $("#waterValue").html(water.amount + " " + water.measurement)
  $("#sugarValue").html(sugar.amount + " " + sugar.measurement)
  $("#iceValue").html(ice.amount + " " + ice.measurement)
}

render(state)

const updateIngredient = (name, { amount, max, measurement }, calcAmount) => {
  state = {
    ...state,
    [name]: {
      amount: calcAmount(amount, max),
      max,
      measurement,
    },
  }
}

$(".increment").click((event) => {
  updateIngredient(event.target.name, state[event.target.name], (amount, max) =>
    amount < max ? amount + 1 : amount
  )
  render(state)
})

$(".decrement").click((event) => {
  updateIngredient(event.target.name, state[event.target.name], (amount) =>
    amount > 0 ? amount - 1 : amount
  )
  render(state)
})
