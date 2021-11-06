const btn = document.querySelector("button");
const container = document.getElementById("container");



btn.addEventListener("click", ()=>{
   createNotification();

   

})


function createNotification(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerHTML= "This is a toast notification";

container.appendChild(notif);


setTimeout(() => {notif.remove()}, 3000);
}

