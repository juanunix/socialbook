var messageInput = document.getElementById('message-input-text');

window.onready = function() {
  if (!hasTouch()) {
      messageInput.focus();
  }
}
