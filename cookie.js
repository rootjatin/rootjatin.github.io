const cookieContainer=document.getElementById("cooks")

// const cookieButton=document.querySelector(".cookie-btn")
const cookieButton=document.getElementById("cooks1")
cookieButton.addEventListener("click" ,()=>{
    cookieContainer.classList.remove("active");
});

setTimeout(()=>{
    cookieContainer.classList.add("active");
},2000)