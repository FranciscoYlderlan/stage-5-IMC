export const error = {
    message: document.querySelector(".text-error"),

    open(){
        this.message.classList.add("open");
        this.message.classList.remove("close");
    },
    close(){
        this.message.classList.remove("open");
        this.message.classList.add("close");
    },
    addOutline(inputElement) {
        inputElement.classList.add("outline-error");
    },
    removeOutline(inputElement) {
        inputElement.classList.remove("outline-error");
    }
}

