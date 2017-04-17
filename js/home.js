/* Home */
const HOME_LINK_CLASS = 'home-link';
var homeLinks = document.getElementsByClassName(HOME_LINK_CLASS);

var photoCameraIcon = document.getElementById('photo-camera-icon');
var fileInput = document.getElementById('post-input-photo');

for (var index = 0; index < homeLinks.length; index++) {
    var element = homeLinks.item(index);
    element.addEventListener('click', function(event) {
        if(window.scrollY > 0) {
            event.preventDefault();
            window.scrollTo(0, 0);
        }
    })
}

photoCameraIcon.addEventListener('click', function() {
    fileInput.click();
})