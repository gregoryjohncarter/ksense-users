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
  // highlight current user selected to signify which posts are being rendered
  const clearPrevious = document.querySelector('.u-select');
  if (clearPrevious) {
    clearPrevious.classList.remove('u-select');
  }
  const uSelect = document.querySelector('.id' + id);
  uSelect.classList.add('u-select');

  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
  .then(response => response.json())
  .then(json => displayPosts(json))
}

function displayPosts(userPosts) {
  const clearPrevious = document.getElementById('user-posts');
  if (clearPrevious) {
    clearPrevious.remove();
  }
  let userContent = document.createElement('div');
  userContent.setAttribute('id', 'user-posts');

  html = '<table>';

  userPosts.forEach((result) => {
    var postTitle = result.title;
    var postContent = result.body;
    
    html += '<tr class="post"><td><span class="title">' + postTitle + '</span>';
    html += '<br>';
    html += '<span class="content">' + postContent + '</span></td></tr>';
  });

  html += '</table>';
  userContent.innerHTML = html;

  let displayPosts = document.querySelector('.display-posts');
  displayPosts.appendChild(userContent);
}