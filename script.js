const net = new brain.NeuralNetwork()

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.750736483663023,"g":0.23909150737185092,"b":0.810026311477039},"output":[1]},{"input":{"r":0.14028523187375508,"g":0.19473682224345734,"b":0.8609418637740345},"output":[1]},{"input":{"r":0.7829289612465438,"g":0.2595229551529121,"b":0.017281121783276454},"output":[1]},{"input":{"r":0.9292835629565241,"g":0.7370208468871469,"b":0.7283135555809084},"output":[0]},{"input":{"r":0.30002502075848225,"g":0.18955394915668577,"b":0.4057242998775976},"output":[1]},{"input":{"r":0.216751501033704,"g":0.816109359402913,"b":0.47300644150355},"output":[0]},{"input":{"r":0.46991167297174363,"g":0.565309354051003,"b":0.7201918739196349},"output":[0]},{"input":{"r":0.3829454532510772,"g":0.25494415828620864,"b":0.4698108858595207},"output":[1]},{"input":{"r":0.28668098914650364,"g":0.8006237735169119,"b":0.6616994351845855},"output":[0]},{"input":{"r":0.639586898576985,"g":0.7757626531068882,"b":0.31396474944695885},"output":[0]},{"input":{"r":0.41343891577154657,"g":0.03255238470883026,"b":0.5811631629573006},"output":[1]},{"input":{"r":0.7457101505512158,"g":0.040755167747625,"b":0.573315280629018},"output":[1]},{"input":{"r":0.8635664310874698,"g":0.7759394093694285,"b":0.24995960495300706},"output":[0]},{"input":{"r":0.892787828029098,"g":0.4626158089912782,"b":0.45940672209627387},"output":[1]},{"input":{"r":0.5133845212903512,"g":0.8474254822469744,"b":0.43746879155528107},"output":[0]},{"input":{"r":0.5837872188974125,"g":0.29746850890018184,"b":0.6790890044310023},"output":[1]},{"input":{"r":0.534564782471417,"g":0.9207476148002698,"b":0.8137317538488107},"output":[0]}]

net.train(data)

const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', () => {
    chooseColor(1)
})

blackButton.addEventListener('click', () => {
    chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

function print() {
    console.log(JSON.stringify(data))
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0]
  guessEl.style.color = guess > .5 ? '#FFF' : '#000'
  colorEl.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}