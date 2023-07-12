// Fetch data from JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts-container');

    // Clear any existing content
    postsContainer.innerHTML = '';

    // Iterate through the posts and create HTML elements
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
