
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
//message sender
let nameInput = document.getElementById(`name`);
let emailInput = document.getElementById(`email`);
let messageInput = document.getElementById(`message`);
document.getElementById("messageSendBtn").onclick = function(){
    if(nameInput.value != "" && emailInput.value != "" && messageInput.value != ""){
        document.querySelector(".sentMessage").innerHTML="message sent"
    } else{
        document.querySelector(".sentMessage").innerHTML="message not sent,  please fill emtpy space "
    }
};
//contact me dencer
document.getElementById("addres").onmouseover = ( )=>{
    document.querySelector(".location").classList.add("danceup");
    setTimeout( () => {
        document.querySelector(".location").classList.remove("danceup")
    },200);  
}
