let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myName", "Meilia")
// let name = localStorage.getItem("myName")
// console.log(name)

// localStorage.clear()


// function saveLead() {
//     // console.log("Button Clicked from onclick attribute!")
// }


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // console.log("Button clicked from addEventListerner")
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // renderLeads()
})


function renderLeads () {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";

        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
  





