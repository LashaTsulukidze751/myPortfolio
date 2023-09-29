
document.querySelector(".spining-smile").addEventListener("mouseover", () => {
    document.querySelector(".spining-smile").classList.add("spinner");
    setTimeout(() => {
        document.querySelector(".spining-smile").classList.add("spinner-remover");
        setTimeout(() => {
            document.querySelector(".spining-smile").classList.remove("spinner");
            document.querySelector(".spining-smile").classList.remove("spinner-remover");
        }, 1000)
    }, 3000)
});
//languages percentages
const languagesPercentages = document.querySelectorAll(".percentage-text");
let elementIndex = 0;
languagesPercentages.forEach(element => {
    document.querySelectorAll(".percentage-text")[elementIndex].innerHTML = (`${element.textContent}%`)
    percentage = parseFloat(element.textContent);
    percentage = percentage / 100 * 200;
    document.querySelectorAll(".inner")[elementIndex].style.width = `${percentage}px`;
    elementIndex++;
})
//day/night theme changer
let icon =document.querySelector(".dayNightChanger");
icon.addEventListener("click",()=>{
    
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        icon.src="images/night-mode.png";
    }else{
        icon.src="images/brightness.png";
    }
    
})