const products = require(`./productsDatabase`)

let cartItems = {}
const sCart = document.getElementById("navbarDropdown2")
const sCartdd = document.getElementById("ddMenuCart")
const clrCart = document.getElementById("clrCart")
const esignup = document.querySelector('#emailSignup')
const termspriv = document.querySelector('#termsAndPriv')

if(esignup) {
    esignup.addEventListener('submit', function(event){
      event.preventDefault()
      document.querySelector('#emailSignup').reset()
      alert('Thank you for signing up!')
  })
}

if(termspriv){
  termspriv.addEventListener('click', function(event){
    event.preventDefault()
    alert('So much spam')
  })
}

if(clrCart) {
  clrCart.addEventListener("click", function(e) {
    localStorage.clear()
  })
}

function tTotals(obj) {
  let price = 0
  let count = 0

  for(let i in obj){
    price += (obj[i].Qty * obj[i].Price)
    count ++
  }
  return [price, count]
}

function setCart(arr) {
  if(arr[1] === 0) {
    sCart.innerHTML = "Shopping Cart"
  }
  else {
    sCart.innerHTML = `Shopping Cart (${arr[1]})  Total: $${arr[0]}`
  }
}

function createCartdd(obj) {
  if(sCartdd.hasChildNodes()) {
    let children = sCartdd.childNodes

    for(let i in children)
    {
      if(children[i].className === "dropdown-item") {
        sCartdd.removeChild(children[i])
      }
    }
  }
  
  for(let i in obj) {
    let newItem = document.createElement("a")
    newItem.className = "dropdown-item"
    newItem.href="#"
    newItem.innerHTML= `${obj[i].name} : $${(obj[i].Qty) * (obj[i].Price)}`

    sCartdd.insertBefore(newItem, sCartdd.firstChild)
  }
}

const addClickFunctionality = () => {
    const querySelectors =[]
    let a = 150
    let i=0

    while(a) {
        a = document.getElementById(i)
        if(a) querySelectors.push(a)
        i++
      }

    console.log(querySelectors)

    querySelectors.map((ele) => {
        let product
        for(let i = 0; i < products.length; i++){
            if(ele.classList[1] === products[i].key) {
                product = products[i]
            }
        }

        ele.addEventListener('click', (e) => {
            e.preventDefault()

            if(localStorage.getItem('cartItems') !== null){
              cartItems = JSON.parse(localStorage.getItem('cartItems'))
            }
            else cartItems = {}

            console.log(cartItems)
            if(!cartItems || !cartItems.hasOwnProperty(product.key)){
              cartItems[product.key] = {name: product.name, Qty: 1, Price: product.price}
            }
            else {
              cartItems[product.key].Qty++
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            setCart(tTotals(cartItems))
            createCartdd(cartItems)
            window.location.reload(true)
        })
    })
}

addClickFunctionality()
cartItems = JSON.parse(localStorage.getItem('cartItems'))


setCart(tTotals(cartItems))
createCartdd(cartItems)

