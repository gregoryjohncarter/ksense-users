async function fetchUsersJsonPlaceholder(url) {
  fetch('https://jsonplaceholder.typicode.com/' + url)
  .then(response => response.json())
  .then(json => displayUsers(json))
}

function displayUsers(userData) {
  let userTable = document.createElement('div');
  userTable.setAttribute('id', 'user-table');

  html = '<table>';

  userData.forEach((result) => {
    var username = result.username;
    var email = result.email;
    
    html += '<tr class="u id' + result.id + '"><td><span class="user">U: ' + username + '</span>';
    html += '<br>';
    html += '<span class="email">E: ' + email + '</span></td></tr>';
  });

  html += '</table>';
  userTable.innerHTML = html;

  let userSelect = document.querySelector('.user-select');
  userSelect.appendChild(userTable);

  // after creating the list of users, go back and add on click functionality for each one
  function enableSelectors(userData) {
    userData.forEach((result) => {
      const postsSelector = document.querySelector('.id' + String(result.id));
      postsSelector.addEventListener('click', function() { selectPostsByUser(String(result.id)) })
    })
  }

  enableSelectors(userData);
}

fetchUsersJsonPlaceholder('users');

async function selectPostsByUser(id) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then(response => response.json())
    .then(test => console.log(test))
}