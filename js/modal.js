// modal activation method
const modalActivateBtn = document.querySelectorAll(".select-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close-modal-btn");
const modalTitle = document.querySelector(".modal-title");
const modalPlayer = document.querySelector("#js-player");

let selectedBtn;
let selectedParentNode;

const videoObject = {
}

// for finding right modal content

modalActivateBtn.forEach(item => {
    item.addEventListener("click", () =>{
        modal.classList.remove("hidden");
        selectedBtn = item;
        selectedParentNode = item.parentNode;
        modalTitle.innerText = selectedParentNode.querySelector("p").innerText;

        if (selectedBtn.innerText === "Video"){
        }   
        else{
        }
    })
})

modalCloseBtn.addEventListener("click", () =>{
    modal.classList.add("hidden");
})
// modal activation method

// modal content method
// modal content method