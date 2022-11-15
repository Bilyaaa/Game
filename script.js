let character = document.querySelector('.character')
character.setAttribute('style', 'bottom: 0')
let game = document.querySelector('.game-wrapper')
let line = document.querySelector('.line-wrapper')
let bottom = character.getAttribute('style')
let timeOut 
let k = 4
let startAlert = document.querySelector('.start-alert')



function getRandomInt() {
    min = Math.ceil(1000);
    max = Math.floor(5000);
    timeOut = Math.floor(Math.random() * (max - min)) + min;
}

function jump () {
    
    character.setAttribute('style', 'bottom: 300px')
    bottom = 'bottom: 300px'
    console.log(character.getAttribute('style'))
    setTimeout(function() {
        character.classList.add('falling')
        character.setAttribute('style', 'bottom: 0')
        
        console.log(character.getAttribute('style'))
      
    },400)
    setTimeout(function() {
        character.classList.remove('falling')
        bottom = 'bottom: 0'
    },1000) 
    
}

class SmallBlock {
    static createSmallBlock () {
        let block = document.createElement('div')
        block.classList.add('small-block')
        line.append(block)
        let i
        block.style.left = '800px'
        let leftNumber = Number(block.style.left.split('px').join(''))
        let timerId = setInterval(() => {
            i = i + 2
            leftNumber -= 2
            block.style.left = leftNumber + 'px'
            if (bottom === 'bottom: 0' && leftNumber == 332  )  {

                document.querySelector('.game-over-alert').setAttribute('style', 'display: block')
                clearInterval(timerId)
            }
            
            },10)
        setTimeout(() => {
            getRandomInt()
            SmallBlock.createSmallBlock()
        }, timeOut);
        setTimeout(() => {
            clearInterval(timerId)  
        }, 4500);
    }
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
            SmallBlock.createSmallBlock()
        }, 1000);
    }
}

startTimer()

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        jump()
    }
})


