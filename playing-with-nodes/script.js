const addButton = document.querySelector('[data-button = Add]')
const removeButton = document.querySelector('[data-button = Remove]')

const container = document.querySelector('.container')

addButton.addEventListener('click', ()=> {
    const newDiv = document.createElement('div')
    const newSpan = document.createElement('span')
    newSpan.innerText = "Hiya"
    container.append(newDiv)
    newDiv.classList.add('new-div')
    newDiv.append(newSpan)
    newDiv.style.color = "white"
    removeSpanFunc(newDiv, newSpan)
})

function removeSpanFunc(newDiv, newSpan) {
    removeButton.addEventListener('click', ()=> {
        newDiv.style.background = "green"
        newSpan.remove()
    })
}


