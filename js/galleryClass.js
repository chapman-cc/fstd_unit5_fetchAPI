class Gallery {
    constructor() {
        this.galContainer = document.querySelector("#gallery"); 
        this.people = [];
    }


    
    storePeopleInfo(json) {
        json.results.forEach((person, index) => this.people.push(new Person(person, index)))
    }

    appendPeopleCards(array) {
            const div = person.generateCards();
            this.galContainer.appendChild(div)
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
        this.galContainer.insertAdjacentHTML("afterend", html);
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