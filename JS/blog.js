const baseUrl ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed';
const blogPostContainer = document.querySelector(".blog-post");

async function blogPost(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);
  
   posts.forEach(post => {
     
    blogPostContainer.innerHTML += `
    <a href="specific.html?id=${post.id}">
      
       <div class='post-container'>
          <div class='blog--posts-image 'style="background-image:url('${post._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
          <span class='text'><h3>${post._embedded["wp:featuredmedia"]["0"].title.rendered}</h3></span>
          <span class=''><p>${post._embedded["wp:featuredmedia"]["0"].caption.rendered}</p></span>
        </div>
      </a>     
    
       `

  
  
  }); 
   
}
blogPost(baseUrl);


// const viewMoreTitle = document.querySelector(".blog-post-specific-title");

// const viewMoreContainer = document.querySelector(".blog-post-specific");

// const viewMoreButton = document.querySelector(".view-more");

// function viewMoreSection() {
//   viewMoreTitle.style.display ="flex";
//   viewMoreContainer.style.display ="flex";
// }

// viewMoreButton.onclick = viewMoreSection;
