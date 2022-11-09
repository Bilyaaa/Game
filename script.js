let character = document.querySelector('.character')
let game = document.querySelector('.game-wrapper')
let line = document.querySelector('.line-wrapper')
let timeOut 
let k = 4
let startAlert = document.querySelector('.start-alert')

let origBlock = document.createElement('div')
let block = origBlock.cloneNode(true)
let block2 = origBlock.cloneNode(true)
let block3 = origBlock.cloneNode(true)
let block4 = origBlock.cloneNode(true)
let block5 = origBlock.cloneNode(true)
block.classList.add('small-block')
block2.classList.add('small-block2')
block3.classList.add('small-block3')
block4.classList.add('small-block4')
block5.classList.add('small-block5')


function getRandomInt() {
    min = Math.ceil(1000);
    max = Math.floor(5000);
    timeOut = Math.floor(Math.random() * (max - min)) + min;
}

function jump () {
    
    character.setAttribute('style', 'bottom: 300px')

    setTimeout(function() {
        character.classList.add('falling')
        character.setAttribute('style', 'bottom: 0') 
      
    },300)
    setTimeout(function() {
        character.classList.remove('falling')
    },1000) 
}

function createSmallBlock () {
    line.append(block)
    let i = 50
    block.style.left = '800px'
    let leftNumber = Number(block.style.left.split('px').join(''))
    
    let timerId = setInterval(() => {
        i = i + 2
        leftNumber -= 2

        block.style.left = leftNumber + 'px'
        console.log(leftNumber)
        if (character.getAttribute('style', 'bottom: 0') && leftNumber < 60)  {
            console.log('game over')
        }
    },10)
    setTimeout(() => {
        getRandomInt()
        createSmallBlock2()
    }, timeOut);
    setTimeout(() => {
        clearInterval(timerId)  

    }, 4500);
}

function createSmallBlock2 () {
    line.append(block2)
    let f = 50
    block2.style.left = '800px'
    let leftNumber = Number(block2.style.left.split('px').join(''))
    
    let timerId = setInterval(() => {
        f = f + 2
        leftNumber -= 2

        block2.style.left = leftNumber + 'px'
    },10)
    setTimeout(() => {
        getRandomInt()
        createSmallBlock3()
    }, timeOut);
    setTimeout(() => {
        clearInterval(timerId)

    }, 4500);
}

function createSmallBlock3 () {
    line.append(block3)
    let f = 50
    block3.style.left = '800px'
    let leftNumber = Number(block3.style.left.split('px').join(''))
    
    let timerId = setInterval(() => {
        f = f + 2
        leftNumber -= 2

        block3.style.left = leftNumber + 'px'
    },10)
    setTimeout(() => {
        getRandomInt()
        createSmallBlock4()
    }, timeOut);
    setTimeout(() => {
        clearInterval(timerId)

    }, 4500);
}

function createSmallBlock4 () {
    line.append(block4)
    let f = 50
    block4.style.left = '800px'
    let leftNumber = Number(block4.style.left.split('px').join(''))
    
    let timerId = setInterval(() => {
        f = f + 2
        leftNumber -= 2

        block4.style.left = leftNumber + 'px'
    },10)
    setTimeout(() => {
        getRandomInt()
        createSmallBlock5()
    }, timeOut);
    setTimeout(() => {
        clearInterval(timerId)
    }, 4500);
}

function createSmallBlock5 () {
    line.append(block5)
    let f = 50
    block5.style.left = '800px'
    let leftNumber = Number(block5.style.left.split('px').join(''))
    
    let timerId = setInterval(() => {
        f = f + 2
        leftNumber -= 2

        block5.style.left = leftNumber + 'px'
    },10)
    setTimeout(() => {
        getRandomInt()
        createSmallBlock()
    }, timeOut);
    setTimeout(() => {
        clearInterval(timerId)

    }, 4500);
}

function startTimer () {
    k--
    startAlert.textContent = k
    if (k > 0) {
        setTimeout(startTimer,1000)
        
    }
    else {
        startAlert.textContent = 'START'
        setTimeout(() => {
            startAlert.setAttribute('style', 'display: none')
            createSmallBlock()
        }, 1000);
        
    }
}

startTimer()

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        jump()
    }
})

