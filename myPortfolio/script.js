document.querySelector(".dropdownBtn").addEventListener("click",()=>{
    document.querySelector(".dropdown").classList.toggle("show");
})
const inners = document.querySelectorAll(".inner");
const percentages = document.querySelectorAll(".percentage");
inners.forEach((inner)=>{
    inner.style.width= inner.dataset.width;
})

for(let i=0;i<percentages.length;i++){
    percentages[i].innerHTML=inners[i].dataset.width;
}