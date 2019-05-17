class SearchBar {
    constructor() {
        this.container = document.querySelector(".search-container");
    }

    appendSearchBar() {
        this.container.innerHTML = `
            <form action="#" method="get">
                <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
            </form>`
    }

    search(e) {
        // if (e.type === "submit") {
        //     console.log(e)
        // } else if (e.type === "keyup") {
        //     console.log(e)
        // }
        const inputVal = this.container.querySelector("input").value.toLowerCase();
        gallery.galContainer.querySelectorAll(".card").forEach(card => {
            const name = card.querySelector(".card-name").textContent.toLowerCase();
            if (!name.includes(inputVal)) {
                card.style.display = "none";
            } else {
                card.style.display = "inherit"
            }
        })
        // const filteredNames = gallery.people.filter(person => person.fullname.includes(inputVal));
        // gallery.appendPeopleCards(filteredNames);

    }
}