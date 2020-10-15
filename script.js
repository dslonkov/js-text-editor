var text = document.querySelector('.text__container');
var edit = document.querySelector('.edit');
var save = document.querySelector('.save');
var cancel = document.querySelector('.cancel');
var defaultText = text.innerHTML;

edit.onclick = function() {
  text.setAttribute('contenteditable', 'true');
  edit.setAttribute('disabled', 'disabled');
  save.removeAttribute('disabled');
  cancel.removeAttribute('disabled');
}

save.onclick = function() {
  text.removeAttribute('contenteditable');
  edit.removeAttribute('disabled');
  save.setAttribute('disabled', 'disabled');
  cancel.setAttribute('disabled', 'disabled');
  localStorage.setItem('data', text.innerHTML);
}

cancel.onclick = function() {
  text.removeAttribute('contenteditable');
  edit.removeAttribute('disabled');
  save.setAttribute('disabled', 'disabled');
  cancel.setAttribute('disabled', 'disabled');
  if (localStorage.length > 0) {
    return text.innerHTML = localStorage.getItem('data');
  }
  else {
    return defaultText;
  }
}
 
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.length > 0) {
    return text.innerHTML = localStorage.getItem('data');
  }
  else {
    return defaultText;
  }
});