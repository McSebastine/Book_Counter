
let counter = document.getElementById("count")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    counter.textContent = count
    console.log(count)
}

function save() {
    let logCount = count + " - "
    saveEl.textContent += logCount
    counter.textContent = 0
    count = 0

    // console.log(logCount)
}


