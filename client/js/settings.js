var avatarButton = document.getElementById('avatar-button');
avatarButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('avatar').click();
});
