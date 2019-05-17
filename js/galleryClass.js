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
    
    addPeople(json) {
        json.results.forEach((person, index) => this.people.push(new Person(person, index)))
    }

    appendPeopleCard() {
        this.people.forEach(person => {
            const div = person.generateCardDiv();
            this.galleryDom.appendChild(div)
        })
    }


}