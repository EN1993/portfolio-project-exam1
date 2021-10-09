const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");
console.log(id);


const url ='https://pe.enlive.one/wp-json/wp/v2/posts/' +id +"?_embed";
const specificPostContainer = document.querySelector(".blog-specific");

async function specificPost() {
  const response = await fetch(url);
  const specific = await response.json();
  console.log(specific);
  
    
  specificPostContainer.innerHTML += `

  <div class="specific-post">
    <div>
      <span class=''><h3>${specific._embedded["wp:featuredmedia"]["0"].title.rendered}</h3></span>  
      <div class='specific-image'style="background-image:url('${specific._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
      <b>  <p> Posted: 16.sept 2019 by Word Travel.</p> </b>
      
      <span class=''><p>${specific._embedded["wp:featuredmedia"]["0"].caption.rendered}</p></span>
      <span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Odio, ducimus aspernatur? Libero nihil hic tenetur officia <br>
          mollitia nulla, blanditiis possimus voluptas, maiores 
          soluta porro voluptatum eligendi laboriosam ad similique 
          recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          
          Odio, ducimus aspernatur? Libero nihil hic tenetur officia
          mollitia nulla, blanditiis possimus voluptas, maiores 
          soluta porro voluptatum eligendi laboriosam ad similique 
          recusandae!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      
      </span>

    </div>  
  </div>
      

  `   
}
specificPost();