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
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            //do the thing here
        })
    })
}