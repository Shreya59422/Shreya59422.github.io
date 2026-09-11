const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
document.getElementById("year").textContent=new Date().getFullYear();
