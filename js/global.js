var searchIconWhite = document.getElementById('search-icon-white');
var searchIconClose = document.getElementById('search-icon-close');
var searchInput = document.getElementById('search-input');
var profileIcon = document.getElementById('profile-icon');
var profileExpandOverlay = document.getElementById('profile-overlay');
var header = document.getElementById('header');
const SEARCH_CLASS = 'display-search';
const PROFILE_CLASS = 'display-profile';

if(searchInput.value) {
    openSearchBox();
}

searchIconWhite.addEventListener('click', openSearchBox);
profileIcon.addEventListener('click', openProfileExpand);

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

function openProfileExpand() {
    header.classList.add(PROFILE_CLASS);
    profileExpandOverlay.addEventListener('click', closeProfileExpand);
    profileIcon.removeEventListener('click', openProfileExpand);
}

function closeProfileExpand() {
    header.classList.remove(PROFILE_CLASS);    
    profileIcon.addEventListener('click', openProfileExpand);
    profileExpandOverlay.removeEventListener('click', closeProfileExpand);    
}


function hasTouch() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }    
}