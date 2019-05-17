class Gallery {
    constructor() {
        this.galleryDom = document.querySelector("#gallery"); 
        this.people = [];
    }

    insertModalContainer() {
        const div = document.createElement("div");
        div.id = "modal-container";
        this.modalDom = div; // ? is it good to set a property inside a method?
        this.galleryDom.insertAdjacentElement("afterend", div);
    }
    
    
    storePeopleInfo(json) {
        json.results.forEach((person, index) => this.people.push(new Person(person, index)))
    }

    appendPeopleCard() {
        this.people.forEach(person => {
            const div = person.generateCards();
            this.galleryDom.appendChild(div)
        })
    }

    insertModalContainer() {
        const html = `
        <div class="modal-container" hidden>
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                </div>
            </div>
            <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>`
        this.galleryDom.insertAdjacentHTML("afterend", html);
    }

    showModal(e) {
        if (!e.target.classList.contains("gallery")) {
            const i = e.target.closest(".card").dataset.index;
            const modal = new Modal(this.people[i]);
            modal.infoContainer.innerHTML = modal.person.generateModalInfo();
            modal.container.hidden = false;
        }
    }
}