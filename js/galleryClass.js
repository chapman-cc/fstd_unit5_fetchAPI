class Gallery {
    constructor() {
        this.dom = document.querySelector("#gallery"); 
        this.people = [];
    }
    
    insertModalContainer() {
        const div = document.createElement("div");
        div.id = "modal-container";
        this.modalDom = div; // ? is it good to set a property inside a method?
        this.galleryDom.insertAdjacentElement("afterend", div);
    }
    
    addPeople(json) {
        json.results.forEach(person => this.people.push(new Person(person)))
    }
    appendPeopleCard() {
        this.people.forEach(person => {
            const div = person.generateCardDiv();
            this.dom.appendChild(div)
        })
    }


}