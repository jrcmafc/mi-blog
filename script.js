const btn = document.getElementById("toggleDark");

btn.onclick = () => {
  document.body.classList.toggle("dark");
};

document.addEventListener("DOMContentLoaded", () => {
  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {

      // Ordenar por fecha (más nuevos primero)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      const container = document.getElementById("postsContainer");

      posts.forEach(post => {
        container.innerHTML += `
          <article class="card">
            <img src="${post.image}" alt="post">
            <div class="card-content">
              <h3><a href="${post.link}">${post.title}</a></h3>
              <p class="meta">${new Date(post.date).toLocaleDateString()}</p>
              <p class="tags">${post.tags}</p>
              <p>${post.excerpt}</p>
            </div>
          </article>
        `;
      });
    });
});
