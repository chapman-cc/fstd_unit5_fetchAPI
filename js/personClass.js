class Person {
    constructor(person, index) {
        this.index = index;
        for (const key in person) {
            this[key] = person[key] //TODO lookup how to deconstruct object
        }

        /**
         * ! Deprecated
         * this.cell = person.cell;
         * this.dob = person.dob;
         * this.email = person.email;s
         * this.gender = person.gender;
         * this.id = person.id;
         * this.location = person.location;
         * this.login = person.login;
         * this.name = person.name;
         * this.nat = person.nat;
         * this.phone = person.phone;
         * this.picture = person.picture;
         * this.registered = person.registered;
         */
        
    }
    get fullAddress() {
        return `${this.location.street}, ${this.location.state}, ${this.location.postcode}`
    }

    get fullName () {
        return `${this.name.first} ${this.name.last}`
    }
    
    get birthDate() {
        const bd = this.dob.date;
        bd.slice(0, 10).replace(/^(\d{4})-(\d{2})-(\d{2})/g, "$2/$3/$1")
    }
    generateCardDiv()  {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <div class="card-img-container">
        <img class="card-img" src="${this.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
        <h3 id="name" class="card-name cap">${this.fullName}</h3>
        <p class="card-text">${this.email}</p>
        <p class="card-text cap">${this.location.city}, ${this.location.state}</p>
        </div>`
        return div;
    }
    
    generateModalDiv() {
        const div = document.createElement("div");
        div.className = "modal-container";
        div.innerHTML = `
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${this.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${this.fullName}</h3>
                    <p class="modal-text">${this.email}</p>
                    <p class="modal-text cap">${this.location.city}</p>
                    <hr>
                    <p class="modal-text">${this.cell}</p>
                    <p class="modal-text">${this.fullAddress}</p>
                    <p class="modal-text">Birthday: ${this.birthDate}</p>
                </div>
            </div>

            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>`
        return div
    }
}