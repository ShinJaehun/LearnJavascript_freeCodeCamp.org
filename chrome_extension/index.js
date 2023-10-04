
let myLeads = []
let oldLeads = []
// let myLeads = `["www.naver.com"]`
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// myLeads = JSON.parse(myLeads)

const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadFromLocalStorage)

if (leadFromLocalStorage) {
    myLeads  = leadFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener('click', function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // console.log(tabs)
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)  
    })


})

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', function() {
    // console.log("button clicked")
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})


function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
            </li>`

        // console.log(listItems)
    }

    ulEl.innerHTML = listItems
}

// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i])
    // ulEl.textContent += myLeads[i] + " "
    // listItems += "<li>" + myLeads[i] + "</li>"
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
// }

// ulEl.innerHTML = listItems