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

    appendModal(html) {
        // const modalContainer = document.querySelector("#modal-container");
        this.modalDom.innerHTML = html;
        this.modalDom.classList.add("modal-container")
    }

    showModal(e) {
        const card = e.target.closest(".card");
        const index = card.dataset.index;
        const html = this.people[index].generateModalDiv(); 
        this.appendModal(html);
    }
    



}