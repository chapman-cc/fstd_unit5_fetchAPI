class Gallery {
    constructor() {
        this.dom = document.querySelector("#gallery"); 
        this.people = [];
    }
    
    addPeople(json) {
        json.results.forEach(person => this.people.push(new Person(person)))
    }
    appendToGallery() {
        this.people.forEach(person => {
            const div = person.generateCardDiv();
            this.dom.appendChild(div)
        })
    }


}