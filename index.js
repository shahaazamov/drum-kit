const drums = document.querySelectorAll('.drum')

drums.forEach((drum) =>{
    drum.addEventListener('click' , () =>{
        let buttonText  = drum.textContent
        play(buttonText)
        animationbtn(buttonText)
    })
})


document.addEventListener('keydown' , (e)=>{
    const keyBoard = e.key
    play(keyBoard)
    animationbtn(keyBoard)
})

function play(key){
    switch(key){
        case 'w':
        let crash = new Audio('./sounds/crash.mp3')
        crash.play()
        break;
        case 'a':
        let kickBase = new Audio('./sounds/kick-bass.mp3')
        kickBase.play()
            break;
        case 's':
        let snare = new Audio('./sounds/snare.mp3')
        snare.play()
            break;
        case 'd':
        let tom1 = new Audio('./sounds/tom-1.mp3')
        tom1.play()
            break;
        case 'j':
        let tom2 = new Audio('./sounds/tom-2.mp3')
        tom2.play()
            break;
        case 'k':
        let tom3 = new Audio('./sounds/tom-3.mp3')
        tom3.play()
            break;
        case 'l':
        let tom4 = new Audio('./sounds/tom-4.mp3')
        tom4.play()
            break;
        default:
            console.log(buttonText)
    }
}
function animationbtn (key) {
    const button = document.querySelector(`.${key}`)
    button.classList.add('pressed')
    setTimeout (() =>{
        button.classList.remove('pressed')
    
    }, 100)
}