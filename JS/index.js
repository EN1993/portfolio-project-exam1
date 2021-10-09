
const baseUrl ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed';
const latestPostContainer = document.querySelector(".galleryshow");

async function latestPost(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);
  
    for (let i = 0; i < posts.length; i++) {
  
      latestPostContainer.innerHTML += `

      <a href="specific.html?id=${posts[i].id}">
       <div class='item'>
          <div class='gallery-picture'style="background-image:url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
          <span class='text'><h3>${posts[i]._embedded["wp:featuredmedia"]["0"].title.rendered}</h3></span>
        </div>
       </a>     `
    }

  
}
latestPost(baseUrl);

const left = document.querySelector(".prev");
const right = document.querySelector(".next");
const galleryshow = document.querySelector(".galleryshow ");

let leftPositioning = 0;
right.onclick = function () {
  console.log("right clicked");
  leftPositioning -= 300;
  galleryshow.style.left = `${leftPositioning}px`;
}

left.onclick =function () {
  console.log("left clicked");
  leftPositioning += 300;
  galleryshow.style.left = `${leftPositioning}px`;
}










