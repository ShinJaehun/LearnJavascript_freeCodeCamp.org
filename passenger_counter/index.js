// document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment() {
    count++
    countEl.textContent = count 
}

function save() {
    // console.log(count)
    let countStr = count + " - "
    countEl.textContent = 0
    saveEl.textContent += countStr
    count = 0
}

