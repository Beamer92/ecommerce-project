(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', function(e) {
  let cCount = 0
  let cartItems = {}
  const sCart = document.getElementById("navbarDropdown2")
  const sCartdd = document.getElementById("ddMenuCart")

  if (localStorage.getItem('cartCount') === null) {
    cCount = localStorage.setItem('cartCount', 1)
  }
  else {
    cCount = parseInt(localStorage.getItem('cartCount'))
  }

  if (localStorage.getItem('cartItems') === null) {
      localStorage.setItem('cartItems', JSON.stringify({
      NewCastle: {name: "NewCastle", Qty: 4, Price: 30},
      Razor: {name: "Razor", Qty:1, Price: 165}
    }))

   cartItems = JSON.parse(localStorage.getItem('cartItems'))
  }
  else {
   cartItems = JSON.parse(localStorage.getItem('cartItems'))
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
  for(let i in obj) {
    let newItem = document.createElement("a")
    newItem.className = "dropdown-item"
    newItem.href="#"
    newItem.innerHTML= `${obj[i].name} : $${(obj[i].Qty) * (obj[i].Price)}`

    // sCartdd.appendChild(newItem)
    sCartdd.insertBefore(newItem, sCartdd.firstChild)
  }
}

setCart(tTotals(cartItems))
createCartdd(cartItems)

})

},{}]},{},[1]);
