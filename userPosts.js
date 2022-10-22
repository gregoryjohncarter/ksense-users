async function fetchUsersJsonPlaceholder(url) {
  fetch('https://jsonplaceholder.typicode.com/' + url)
  .then(response => response.json())
  .then(test => displayUsers(test))
}

function displayUsers(userData) {
  let userTable = document.createElement('div');
  userTable.setAttribute('id', 'user-table');

  html = '<table>';

  userData.forEach((result) => {
    var username = result.username;
    var email = result.email;
    
    html += '<tr class="u ' + result.id + '"><td><span class="user">U: ' + username + '</span>';
    html += '<br>';
    html += '<span class="email">E: ' + email + '</span></td></tr>';
  });

  html += '</table>';
  userTable.innerHTML = html;

  let userSelect = document.querySelector('.user-select');
  userSelect.appendChild(userTable);
}

fetchUsersJsonPlaceholder('users');