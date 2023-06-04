let posts = '';

let postsId = document.querySelector('#posts')

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    const { ok, status } = res;
    if (status === 200) {
      return res.json();
    }
    throw new Error("API failed");
  })
  .then((data) => {

    data.forEach((post) => {
      posts =
        posts +
        `
      <div class="post">
        <h2 class="post-title">${post.id} - ${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postsId.innerHTML = posts;
    });
  })
  .catch((err) => console.log(err.message));

