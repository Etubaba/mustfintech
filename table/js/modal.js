const modalOverlay = document.querySelector(".modal_overlay")
const bodyElement = document.querySelector("body")
const modalIcon = document.querySelector(".modal_icon img")
const modalContentText = document.querySelector(".modal_content p")
const modalOptionBtn = document.querySelectorAll(".btn_container button")

const modalIcons = {
    alert: "img/modal_alert_icon.png",
    check: "img/modal_check_icon.png"
}

modalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-x") || e.target.classList.contains("modal_overlay")) {
        modalDisplay("none", "visible")
    }
})


function modalDisplay(display, overflow) {
    modalOverlay.style.display = display
    bodyElement.style.overflow = overflow
}

function loadModal(icon, content,option) {
    modalDisplay("flex","visible")
    modalIcon.setAttribute("src", modalIcons[icon])
    modalContentText.textContent = `${content}`
    if(option == 1) modalOptionBtn[1].style.display = "none"
    else  modalOptionBtn[1].style.display = "block"
}
