const products = require(`./js/productsDatabase`)

module.exports = addClickFunctionality = () => {
    const querySelectors =[]
    let a = ''
    for(let i = 0; i < 1000000; i++) {
        a = document.querySelector(`#${a}`)
        if(a === undefined){
            break;
        }
        querySelectors.push(a)
    }

    querySelectors.map((ele) => {
        for(let i = 0; i < products.length; i++){
            if(ele.includes(products[i].key)) {
                const product = products[i]
            }
        }

        ele.addEventListener('click', (e) => {
            e.preventDefault()

            //do localstorage stuff from product here name/price
        })
    })
}