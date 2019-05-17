const randUserAPI = "https://randomuser.me/api/?results=12";
const gallery = new Gallery();
const searchBar = new SearchBar();

searchBar.appendSearchBar();

//----------------------------------------
// Store and append rangalleryDom user to galleryDom //TODO edit comment
fetch(randUserAPI)
    .then(res => res.json())
    .then(data => gallery.storePeopleInfo(data))
    .then(() => gallery.appendPeopleCards())
    .then(() => gallery.insertModalContainer())
    .catch(err => console.log(Error(err)));

//----------------------------------------
// Event istener

gallery.galContainer.addEventListener("click", e => gallery.showModal(e));

searchBar.container.addEventListener("keyup", e => searchBar.search(e));
searchBar.container.addEventListener("submit", e => searchBar.search(e));