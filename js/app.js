var searchIconWhite = document.getElementById('search-icon-white');
var searchIconClose = document.getElementById('search-icon-close');
var searchInput = document.getElementById('search-input');
var header = document.getElementById('header');
const SEARCH_CLASS = 'display-search';


if(searchInput.value) {
    openSearchBox();
}

searchIconWhite.addEventListener('click', openSearchBox);

function openSearchBox() {
    header.classList.add(SEARCH_CLASS)
    searchIconClose.addEventListener('click', closeSearchBox);
    searchIconWhite.removeEventListener('click', openSearchBox);
    searchInput.focus();
}

function closeSearchBox() {
    header.classList.remove(SEARCH_CLASS)
    searchIconWhite.addEventListener('click', openSearchBox);
    searchIconClose.removeEventListener('click', closeSearchBox);
}