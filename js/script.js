const randUserAPI = "https://randomuser.me/api/?results=12";
const gallery = new Gallery();
// const modal = new Modal();

// modal.insertModalContainer()
//----------------------------------------
// Store and append rangalleryDom user to galleryDom
fetch(randUserAPI)
    .then(res => res.json())
    .then(data => gallery.storePeopleInfo(data))
    .then(() => gallery.appendPeopleCard())
    .then(() => gallery.insertModalContainer())
    .catch(err => console.log(Error(err)))

//----------------------------------------
// Open modal event listener

gallery.galleryDom.addEventListener("click", e => gallery.showModal(e))

// gallery.modalDom.addEventListener("click", gallery.modalControl) 