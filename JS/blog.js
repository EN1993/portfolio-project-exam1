const baseUrl ='' ;
const blogContainer = document.querySelector(".blog");

async function getBlog(url) {
  const response = await fetch(url);
  const blog = await response.json();

  for (let i = 0; i < blog.length; i++) {

    if (i===3) {
      break;
    }
    
    blogContainer.innerHTML += `
    <a href="specific.html?id=${blog[i].id}">
      <div >
        <div class='blog--posts-image'style="background-image:url('${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
        <span class='featuredmedia-text'><h4>${blog[i]._embedded["wp:featuredmedia"]["0"].title.rendered}</h4></span>
        
      </div>
    </a>  `
  }
  
}
getBlog(baseUrl);



const viewMoreTitle = document.querySelector(".blog-post-specific-title");

const viewMoreContainer = document.querySelector(".blog-post-specific");

const viewMoreButton = document.querySelector(".view-more");

function viewMoreSection() {
  viewMoreTitle.style.display ="flex";
  viewMoreContainer.style.display ="flex";
}

viewMoreButton.onclick = viewMoreSection;


