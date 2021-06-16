const containerDiv = document.querySelector(".container")
const btnStart = document.querySelector('.btn')

const colors = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];




btnStart.addEventListener("click", function () {
    const numberOfRows = parseInt(prompt("How many rows should be added"))
    const numberOfCols = parseInt(prompt("How many number of columns should be added"))

    createDivs(numberOfCols, numberOfRows)
})


function createDivs(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        let childDiv = document.createElement('div')
        childDiv.classList.add('grid-child')
        childDiv.classList.add('white')
        childDiv.textContent = 2
        containerDiv.appendChild(childDiv)
    }
    let children = document.querySelectorAll('.grid-child')
    children.forEach((div) => {
        div.style.height = `${rows}px`
        div.style.width = `${cols}px`
        
    })
    backgroundColor(children)
}


function backgroundColor(divs){
    divs.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            const element = e.currentTarget
            let color = '#'
            for(let i =0; i <6; i++){
                let random = Math.floor(Math.random() * colors.length)
                color += colors[random]
                element.style.backgroundColor = color
            }
        })
    })
}

