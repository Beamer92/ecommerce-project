(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const products = require(`./productsDatabase`)
console.log("BEER!")
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


},{"./productsDatabase":2}],2:[function(require,module,exports){
products = [
    {key: 'safety', name: 'Safety Razor', image: 'https://media.easycomforts.com/images/p337718b.jpg', price: 25.00},
    {key: 'straight', name: 'Straight Razor', image: 'https://www.bokerusa.com/media/image/thumbnail/STANDARD-2554759a03df291fd8-600x500.jpg', price: 165.00},
    {key: 'coldSmoke', name: 'Cold Smoke Ale', image: 'https://c1.staticflickr.com/7/6005/5960021970_94dceb83d5.jpg', price: 30.00},
    {key: 'bigSky', name: 'Big Sky Brew', image: 'http://morrisdistributing.com/wp-content/uploads/2015/12/Z-BigSky-beers.jpg', price: 8.00},
    {key: 'newcastle', name: 'Newcastle', image: 'https://groceries.morrisons.com/productImages/120/120056011_0_640x640.jpg?identifier=8938170fdc9490c8b7c293d35e72ba76', price: 3.50},
    {key: 'cream', name: 'Shave Cream', image: 'https://pics.drugstore.com/prodimg/190633/900.jpg', price: 9.50},
    {key: 'shaveBrush', name: 'Shave Brush', image: 'https://pics.drugstore.com/prodimg/342996/900.jpg', price: 15.00},
    {key: 'soap', name: 'Shave Soap', image: 'https://henrietvictoria.com/wp-content/uploads/2018/06/shaving-soap-collection-white-henri-et-victoria.jpg', price: 5.00},
    {key: 'scissors', name: 'Fancy Scissors', image: 'https://cdn.shopify.com/s/files/1/0521/1557/products/DGC___scissors_1024x1024.jpg?v=1448918408', price: 65.00},
    {key: 'oil', name: 'Beard Oil', image: 'https://images-na.ssl-images-amazon.com/images/I/51YDQwxt18L.jpg', price: 10.00},
    {key: 'balm', name: 'Beard Balm', image: 'https://cdn3.volusion.com/jmevu.bzyec/v/vspfiles/photos/BBS-4.jpg?1533886338', price: 12.50},
    {key: 'beardBrush', name: 'Beard Brush', image: 'https://www.baldingbeards.com/wp-content/uploads/2018/01/beardoholic-beard-brush-300x222.jpg', price: 11.00},
    {key: 'comb', name: 'Beard Comb', image: 'https://s3.amazonaws.com/s3.madvikingbeard.com/wp-content/uploads/2017/03/25154048/MV_BeardCombs.jpg', price: 35.00},
    {key: 'pliny', name: 'Pliny', image: 'https://www.totalwine.com/media/sys_master/twmmedia/h13/hfb/8806311526430.png', price: 6.50}
]

module.exports = products

},{}]},{},[1]);
