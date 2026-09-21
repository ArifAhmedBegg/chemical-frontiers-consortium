const menu=document.querySelector(".menu"),links=document.querySelector(".nav-links");
if(menu)menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();