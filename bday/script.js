
const grid = document.getElementById("lettersGrid")

const startDate = new Date("2026-03-16T00:00:00")

const today = new Date()

let unlockedLetters = Math.floor((today - startDate) / (1000*60*60*24)) + 1

if(unlockedLetters < 0) unlockedLetters = 0
if(unlockedLetters > 20) unlockedLetters = 20

for(let i=1;i<=20;i++){

let letter = document.createElement("div")

letter.classList.add("letter")

if(i <= unlockedLetters){

letter.innerHTML="💌"

letter.onclick=()=>{

window.location.href=`letters/letter${i}.html`

}

}

else{

letter.innerHTML="🔒"

letter.classList.add("locked")

}

grid.appendChild(letter)

}


function updateCountdown(){

let now = new Date()

let nextUnlock = new Date(startDate)
nextUnlock.setDate(startDate.getDate() + unlockedLetters)

let diff = nextUnlock - now

if(diff <= 0){
document.getElementById("timer").innerText = "A new letter is unlocked 💌"
return
}

let h = Math.floor(diff/1000/60/60)
let m = Math.floor(diff/1000/60)%60
let s = Math.floor(diff/1000)%60

document.getElementById("timer").innerText =
`${h}h ${m}m ${s}s`

}

setInterval(updateCountdown,1000)
updateCountdown()

