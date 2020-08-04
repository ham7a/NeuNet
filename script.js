const net = new brain.NeuralNetwork()

const data = 
[{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.750736483663023,"g":0.23909150737185092,"b":0.810026311477039},"output":[1]},{"input":{"r":0.14028523187375508,"g":0.19473682224345734,"b":0.8609418637740345},"output":[1]},{"input":{"r":0.7829289612465438,"g":0.2595229551529121,"b":0.017281121783276454},"output":[1]},{"input":{"r":0.9292835629565241,"g":0.7370208468871469,"b":0.7283135555809084},"output":[0]},{"input":{"r":0.30002502075848225,"g":0.18955394915668577,"b":0.4057242998775976},"output":[1]},{"input":{"r":0.216751501033704,"g":0.816109359402913,"b":0.47300644150355},"output":[0]},{"input":{"r":0.46991167297174363,"g":0.565309354051003,"b":0.7201918739196349},"output":[0]},{"input":{"r":0.3829454532510772,"g":0.25494415828620864,"b":0.4698108858595207},"output":[1]},{"input":{"r":0.28668098914650364,"g":0.8006237735169119,"b":0.6616994351845855},"output":[0]},{"input":{"r":0.639586898576985,"g":0.7757626531068882,"b":0.31396474944695885},"output":[0]},{"input":{"r":0.41343891577154657,"g":0.03255238470883026,"b":0.5811631629573006},"output":[1]},{"input":{"r":0.7457101505512158,"g":0.040755167747625,"b":0.573315280629018},"output":[1]},{"input":{"r":0.8635664310874698,"g":0.7759394093694285,"b":0.24995960495300706},"output":[0]},{"input":{"r":0.892787828029098,"g":0.4626158089912782,"b":0.45940672209627387},"output":[1]},{"input":{"r":0.5133845212903512,"g":0.8474254822469744,"b":0.43746879155528107},"output":[0]},{"input":{"r":0.5837872188974125,"g":0.29746850890018184,"b":0.6790890044310023},"output":[1]},{"input":{"r":0.534564782471417,"g":0.9207476148002698,"b":0.8137317538488107},"output":[0]},{"input":{"r":0.6776405338614175,"g":0.42093528139278624,"b":0.7602096815367854},"output":[1]},{"input":{"r":0.3137800661148109,"g":0.07369822267233084,"b":0.9954665584241751},"output":[1]},{"input":{"r":0.4123598959324346,"g":0.3237288918337544,"b":0.06659843505448304},"output":[1]},{"input":{"r":0.030230077184489224,"g":0.1219825789084692,"b":0.08955121711858816},"output":[1]},{"input":{"r":0.7049556661539327,"g":0.4881188713155191,"b":0.09158359465211507},"output":[1]},{"input":{"r":0.21343986557000583,"g":0.03182568119576734,"b":0.22406399615665595},"output":[1]},{"input":{"r":0.7015320672335001,"g":0.3334444610354834,"b":0.5642995195205112},"output":[1]},{"input":{"r":0.9367341002887293,"g":0.5800279284679457,"b":0.4738727821950055},"output":[1]},{"input":{"r":0.17865452196421083,"g":0.9252682589826442,"b":0.6563314690267437},"output":[0]},{"input":{"r":0.4353656972220228,"g":0.017375440809037634,"b":0.8172907504473779},"output":[1]},{"input":{"r":0.14204000732491906,"g":0.7086934149444393,"b":0.9122961129689964},"output":[0]},{"input":{"r":0.1464775174962425,"g":0.5775553431185243,"b":0.8989855426017896},"output":[0]},{"input":{"r":0.3313042079846624,"g":0.6402353127880336,"b":0.5757800807769307},"output":[0]},{"input":{"r":0.7888078659006188,"g":0.13876324568409415,"b":0.44630868368323484},"output":[1]},{"input":{"r":0.06980331440688614,"g":0.9545074793772588,"b":0.5489169848180726},"output":[0]},{"input":{"r":0.7048913001430401,"g":0.21430385772431038,"b":0.9795207346010113},"output":[1]},{"input":{"r":0.30976456558276655,"g":0.03439697495743377,"b":0.40178407791603354},"output":[1]},{"input":{"r":0.9079178005778568,"g":0.7901511513355262,"b":0.419518624111491},"output":[0]}]

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