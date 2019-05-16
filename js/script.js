const randUserAPI = "https://randomuser.me/api/";
const randUserMulti = "?results=12"

const gallery = new Gallery();

fetch(randUserAPI + randUserMulti)
    .then(res => res.json())
    .then(data => gallery.addPeople(data))
    .then(() => gallery.appendToGallery())
    .catch(err => console.log(Error(err)))