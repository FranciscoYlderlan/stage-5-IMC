export const modal = {
    
    wrapperModal: document.querySelector(".wrapper-modal"),
    buttonClose: document.querySelector(".card.modal button"),
    message: document.querySelector(".card.modal h2"),
    open() {
        this.wrapperModal.classList.add("open");
    },
    close() {
        this.wrapperModal.classList.remove("open");
    }
}

modal.buttonClose.addEventListener("click", () => modal.close());