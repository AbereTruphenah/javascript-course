let countEl = document.getElementById("count-el")
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    countEl.textContent = 0
    count = 0
}
save()

