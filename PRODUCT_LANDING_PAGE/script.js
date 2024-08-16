const menuBtn=document.getElementById("menu__btn")
const mobileNav=document.getElementById("mobile__navbar")
menuBtn.addEventListener("click",()=>{
   if (mobileNav.style.display!=="flex"){
    mobileNav.style.display="flex"
    menuBtn.classList.remove("fa-bars")
    menuBtn.classList.add("fa-x")
   }else{
    mobileNav.style.display="none"
    menuBtn.classList.remove("fa-x")
    menuBtn.classList.add("fa-bars")
   }
})