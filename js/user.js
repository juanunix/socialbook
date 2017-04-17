var profileInfo = document.getElementById('profile-info');
var userInfoClickable = document.getElementById('user-info');

const USER_DETAILS_CLASS = 'user-details-show';

userInfoClickable.addEventListener('click', function() {
    if (profileInfo.classList.contains(USER_DETAILS_CLASS) ) {
        profileInfo.classList.remove(USER_DETAILS_CLASS);
    } else {
        profileInfo.classList.add(USER_DETAILS_CLASS);        
    }
})