let un = prompt('What is your name?', 'Kevin');
let isunCorrect = confirm('Is your name ' + un + '?');
if (isunCorrect == true) {
  document.getElementById('user-name-goes-here').textContent =
    'Welcome ' + un + '!';
}
