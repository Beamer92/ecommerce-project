document.querySelector('#emailSignup').addEventListener('submit', function(event){
    event.preventDefault()
    document.querySelector('#emailSignup').reset()
    alert('Thank you for signing up!')
})

document.querySelector('#termsAndPriv').addEventListener('click', function(event){
  event.preventDefault()
  alert('So much spam')
})

document.addEventListener('DOMContentLoaded', function() {

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
