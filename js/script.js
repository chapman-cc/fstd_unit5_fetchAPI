const randUserAPI = "https://randomuser.me/api/?results=12";
const gallery = new Gallery();
const searchBar = new SearchBar();

searchBar.appendSearchBar();

//----------------------------------------
// Store and append rangalleryDom user to galleryDom //TODO edit comment
fetch(randUserAPI)
    .then(res => res.json())
    .then(data => gallery.storePeopleInfo(data))
    .then(() => gallery.appendPeopleCard())
    .then(() => gallery.insertModalContainer())
    .catch(err => console.log(Error(err)))

//----------------------------------------
// Open modal event listener

gallery.galContainer.addEventListener("click", e => gallery.showModal(e))