let countEl= document.getElementById("count-el")
let count = 0
let saveEl= document.getElementById("save-el")

function increment(){ 
    count+=1
    countEl.textContent=count
    console.log(count)
 }

function save(){
    let prvcount = count+ " - "
    saveEl.textContent += prvcount
    countEl.textContent=count=0
    console.log(count)
}







