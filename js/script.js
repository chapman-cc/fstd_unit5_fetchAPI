const randUserAPI = "https://randomuser.me/api/?results=12";
const gallery = new Gallery();

//----------------------------------------
// Store and append rangalleryDom user to galleryDom
fetch(randUserAPI)
    .then(res => res.json())
    .then(data => gallery.addPeople(data))
    .then(() => gallery.appendPeopleCard())
    .then(() => gallery.insertModalContainer())
    .catch(err => console.log(Error(err)))