console.log('index js file');
// Targetting the Elements
let drums = document.querySelectorAll(".drum");
// Defining The functions
drums.forEach((drum) => {
        drum.addEventListener("click", (e) => {
                let key=e.target.innerText;
                makeSound(key)
                buttonAnim(e.target.innerText.toLowerCase())           
})})

document.addEventListener("keypress",(keys)=>{
        makeSound(keys.key.toUpperCase())
        buttonAnim(keys.key)

})

function makeSound(sign) {
        switch (sign) {
                case "D":
                let tom1= new Audio("assets/sounds/tom-1.mp3")
                tom1.play()
                break;
                case "A":
                let tom2 = new Audio("assets/sounds/tom-2.mp3")
                tom2.play()
                break;
                case "L":
                let tom3 = new Audio("assets/sounds/crash.mp3")
                tom3.play()
                break;
                case "F":
                let tom4 = new Audio("assets/sounds/tom-4.mp3")
                tom4.play()
                break;
                case "K":
                let crash = new Audio("assets/sounds/tom-3.mp3")
                crash.play()
                break;
                case "J":
                let tom5 = new Audio("assets/sounds/tom-3.mp3")
                tom5.play()
                break;
                case "W":
                let tom6 = new Audio("assets/sounds/tom-4.mp3")
                tom6.play()
                break;
        }
}

function buttonAnim(button){
        let active=document.querySelector('.'+ button)
        active.classList.add("beaten");
        setTimeout(()=>{
                active.classList.remove("beaten");
        },300)

        
}

