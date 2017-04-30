var commentInput = document.getElementById('comment-input-text');

window.onready = function() {
  if (!hasTouch()) {
      commentInput.focus();
  }
}
