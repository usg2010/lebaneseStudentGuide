window.onload=()=>{
 setTimeout(() =>{
     document.querySelector("body").classList.add("display");
 },2500);
};

const menuIcon = document.querySelector(".page-menu");
const navbar = document.querySelector(".container")
menuIcon.addEventListener("click",() => {
navbar.classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener
("click",() =>{
    document.querySelector("html").style.scrollBehavior
    ="smooth";
    setTimeout(()=>{
        document.querySelector("html").style.scrollBehavior
    ="unset";
    },1000);
});
