
const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");


const url = "" +id;

const blogSpecificContainer = document.querySelector(".blog-specific");

async function blogSpecific() {
  const response = await fetch(url);
  const specific = await response.json();
    console.log(specific);
  for (let i = 0; i < specific.length; i++) {
    
    blogSpecificContainer.innerHTML += `
  
    <div>
        
      <div class='blog--specific-image'style="background-image:url('${specific[i].blog_post_layout_featured_media_urls.full[0]}')"></div>
      <span class='featuredmedia-specific-text'><h4>${specific[i]["wp:featuredmedia"]["0"].title.rendered}</h4></span> 
        
    </div>
  
  
  
  `
  }
  
 
}
blogSpecific();