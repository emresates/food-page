const icons = document.querySelectorAll(".icons i")
let i = 1 //When images end, error occurs. So I will add counter

setInterval(() => {
    i++

    const icon = document.querySelector(".icons .change")
   
    icon.classList.remove("change")
    
    if (i > icons.length) {
        icons[0].classList.add("change")
        i = 1
    } else {
        icon.nextElementSibling.classList.add("change")
    }

}, 1000)


const menu = document.querySelector(".menu")
const all = document.querySelectorAll(".target")

menu.addEventListener("click",()=> {
    all.forEach((item)=>{
        item.classList.toggle("change")
    })
})
