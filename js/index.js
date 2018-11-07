document.addEventListener('DOMContentLoaded', function(e) {

  if (localStorage.getItem('cartCount') === null) {
    localStorage.setItem('cartCount', 0)
  }
  else {
    level = parseInt(localStorage.getItem('cartCount'))
  }

  if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', {})
  }
  else {
    level = parseInt(localStorage.getItem('cartCount'))
  }


  

})
