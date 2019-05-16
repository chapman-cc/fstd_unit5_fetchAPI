class Person {
    constructor(person) {
        this.cell = person.cell;
        this.dob = person.dob;
        this.email = person.email;
        this.gender = person.gender;
        this.id = person.id;
        this.location = person.location;
        this.login = person.login;
        this.name = person.name;
        this.nat = person.nat;
        this.phone = person.phone;
        this.picture = person.picture;
        this.registered = person.registered;
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
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <div class="card-img-container">
        <img class="card-img" src="${this.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
        <h3 id="name" class="card-name cap">${this.name.first} ${this.name.last}</h3>
        <p class="card-text">${this.email}</p>
        <p class="card-text cap">${this.location.city}, ${this.location.state}</p>
        </div>`
        return div;
    }
}