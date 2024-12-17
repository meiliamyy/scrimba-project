let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

function saveLead() {
    // console.log("Button Clicked from onclick attribute!")
}
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // console.log("Button clicked from addEventListerner")
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "

}