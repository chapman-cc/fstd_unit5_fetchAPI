class Modal {
    constructor(person) {
        this.person = person;
        this.limit = 11;
        this.container = document.querySelector(".modal-container");
        this.infoContainer = document.querySelector(".modal-info-container");

        this.container.addEventListener("click", e => this.modalControls(e)) //? is it a good idea to add event listener here?
    }


    modalControls(e) {
        const targetID = e.target.id;
        if (targetID === "modal-next") {
            this.showNextModal();
        } else if (targetID === "modal-prev") {
            this.showPrevModal();
        } else if (targetID === "modal-close-btn" || e.target.tagName === "STRONG") {
            this.closeModal();
        } else {
            return;
        }
    }

    closeModal() {
        this.infoContainer.innerHTML = "";
        this.container.hidden = true;
        delete this;
    }
    
    
    showNextModal() {
        const i = this.person.index + 1 > this.limit ? 0 : this.person.index + 1;
        const person = gallery.people[i];
        this.infoContainer.innerHTML = person.generateModalInfo();
        this.person = person;
    }

    showPrevModal(){
        const i = this.person.index - 1 < 0 ? this.limit : this.person.index - 1; 
        const person = gallery.people[i];
        this.infoContainer.innerHTML = person.generateModalInfo();
        this.person = person;
    } 

}