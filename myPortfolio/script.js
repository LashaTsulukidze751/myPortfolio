document.querySelector(".dropdownBtn").addEventListener("click", () => {
    document.querySelector(".dropdown").classList.toggle("show");
})
const inners = document.querySelectorAll(".inner");
const percentages = document.querySelectorAll(".percentage");
inners.forEach((inner) => {
    inner.style.width = inner.dataset.width;
})

for (let i = 0; i < percentages.length; i++) {
    percentages[i].innerHTML = inners[i].dataset.width;
}

//inputs check

const inputs = document.querySelectorAll("#inp");
document.querySelector(".inputsSubmit").addEventListener("click", () => {
        if (inputs[0].value == "") {
            document.getElementById("missedComponent").innerHTML="Enter Name Please!"
        }else
        if (inputs[1].value == "") {
            document.getElementById("missedComponent").innerHTML="Enter Email Please!"
        }else
        if (inputs[2].value == "") {
            document.getElementById("missedComponent").innerHTML="Enter Number Please!"
        }else
        if (inputs[3].value == "") {
            document.getElementById("missedComponent").innerHTML="Enter Some Text Please!"
        }else{
            inputs.forEach((input)=>{
                input.value="";
            })
            document.getElementById("missedComponent").innerHTML="Message send:)"
        }
})
