const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");
console.log(id);


const url ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed/' +id;
const specificPostContainer = document.querySelector(".blog-specific");

async function specificPost() {
  const response = await fetch(url);
  const specific = await response.json();
  console.log(specific);
  
    
  specificPostContainer.innerHTML += `

  <div>  
    <span class=''><h3>${specific._embedded["wp:featuredmedia"]["0"].title.rendered}</h3></span>  
    <div class='specific-image'style="background-image:url('${specific._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
    <span class=''><p>${specific._embedded["wp:featuredmedia"]["0"].caption.rendered}</p></span>
  </div>
      

  `   
}
specificPost();