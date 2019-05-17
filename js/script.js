const randUserAPI = "https://randomuser.me/api/?results=12";
const gallery = new Gallery();

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

gallery.galleryDom.addEventListener("click", e => {
    if (!e.target.classList.contains("gallery"))
        gallery.showModal(e)        
})

gallery.modalDom.addEventListener("click", e => {
    const targetID = e.target.id;
    if (targetID === "modal-prev") {
        gallery.showPrevModal();
    } else if (targetID === "modal-next") {
        gallery.showNextModal();
    } else if (targetID === "modal-close-btn" || e.target.tagName === "STRONG") {
        gallery.closeModal();
    } else {
        return;
    }
}) 