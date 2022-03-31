const close = document.getElementById('close')
const nav = document.getElementById('nav')
const favBtn = document.getElementById('favbtn')
const video = document.getElementById('sgtn-video')



close.addEventListener('click',()=>{

    nav.classList.toggle("active")
})

favBtn.addEventListener("click",()=>{
    
    video.classList.toggle("fav-transition")
    favBtn.classList.toggle("fav-transition")

})
