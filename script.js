
let bill = document.getElementById("bill");
let custom = document.getElementById("custom");
let tip = document.querySelectorAll(".tips");
let numOfPersons = document.getElementById("NumofPeople");
let error = document.getElementById("error");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
let num = 0;

// const tipNum = tip.value;


// tips = bill.value * (tip.value /100)
// totals = bill.value + tip.value
// perPeople = totals/numOfPersons
// totalbill = bill.value / numOfPersons.value



bill.addEventListener("input",display);

numOfPersons.addEventListener("input", display);

tip.forEach(tipInput => {
    tipInput.addEventListener("click",()=>{
        tip.forEach(btn => btn.classList.remove("active"));
        tipInput.classList.add("active");
        num = tipInput.value;
        display();
    })
})
custom.addEventListener("input", ()=>{
    num = custom.value;
    display();
})

function display() {
    const billNum = bill.value;
    const people = numOfPersons.value;
    const tips = (billNum * (num/100))/ people;
    
    if(people=="") {
        error.textContent="Can't be zero";
    }
    else if (people > 0){
        error.textContent="";
        totalPerPerson = (billNum / people) + tips;
        total.value = `$${totalPerPerson.toFixed(2)}`;
        tipAmount.value = `$${tips.toFixed(2)}`;
    }
    
   
    
    // tipAmount.value = tips;
    
}

reset.addEventListener("click", ()=> {
    bill.value = "";
    custom.value = "";
    numOfPersons.value = "";
    tipAmount.value="";
    total.value = "";

    error.textContent = "";
    tip.forEach(tips =>{
        tips.classList.remove("active");
    })
})


// function calc() {
//     const billNum = bill.value;
//     const people = numOfPersons.value;
//     total.value = (billNum / people) + tips;
// }

// function removeError() {
//     if (people > 1){
//         error.textContent = "";
//     }
//     return people;
// }