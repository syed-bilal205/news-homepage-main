const mobile = document.querySelector(".mobileMenu")
const mainNavbar = document.querySelector(".mainNavbar")

const toggleNavbar=()=>{
    mainNavbar.classList.toggle("active")
}

mobile.addEventListener("click",()=>{
    toggleNavbar()
})