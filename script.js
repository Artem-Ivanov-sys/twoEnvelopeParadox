var total = 0
var min = 0
var reset = false

function select(element) {
  if (!reset) {
    var first = element.path[0].id
    var element_ = document.getElementById(first)
    element_.src = 'images/opened_envelope.png'
    if (!element_.parentNode.parentNode.innerHTML.includes('200 $')) {
      var text = document.getElementsByClassName('text')[0]
      text.textContent = 'Do you want to change envelope?'
      var parent = element_.parentNode
      parent.innerHTML += '<p>200 $</p>'
      parent.lastChild.style.position = 'absolute'
      parent.lastChild.style.top = '200px'
      if (first == '1') {
        parent.lastChild.style.left = '0'
      }
      else {
        parent.lastChild.style.right = '0'
      }
    }
    else {
      min += 200
      var money = (Math.random()*2).toFixed(0) == 1 ? 100: 400
      var text = document.getElementsByClassName('text')[0]
      if (element_.parentNode.innerHTML.includes('200 $')) {
        text.textContent = `You've not changed envelope. Click on one of envelopes`
        total += 200
      }
      else {
        text.textContent = `You've changed envelope. Click on one of envelopes`
        var parent = element_.parentNode
        parent.innerHTML += `<p>${money} $</p>`
        parent.lastChild.style.color = money == 100 ? 'red': 'green'
        parent.lastChild.style.position = 'absolute'
        parent.lastChild.style.top = '200px'
        if (first == '1') {
          parent.lastChild.style.left = '0'
        }
        else {
          parent.lastChild.style.right = '0'
        }
        total += money
      }
      document.getElementsByClassName('total')[0].textContent = `Total: ${total}`
      document.getElementsByClassName('min')[0].textContent = `Without envelope change: ${min}`
      reset = true
    }
  }
  else {
    reset = false
    document.getElementsByTagName('ul')[0].innerHTML = `<li><img src="images/closed_envelope.png" alt="" id="1" width="300px"></li>
    <li><img src="images/closed_envelope.png" alt="" id="2" width="300px"></li>`
    document.getElementsByClassName('text')[0].textContent = 'Select one envelope'
  }
  document.getElementById('1').onclick = element => select(element)
  document.getElementById('2').onclick = element => select(element)
}

document.getElementById('1').onclick = element => select(element)
document.getElementById('2').onclick = element => select(element)
