const popup = document.querySelector(".popupsection");
const overlayy = document.querySelector(".overlay") 



const openpopup=() => {
    console.log("Popup is open");
    popup.classList.add("active");
    overlayy.classList.add("overlayin");
}

const closepopup =() =>{
    console.log("Popup is close");
    popup.classList.remove("active");
    overlayy.classList.remove("overlayin");
} 