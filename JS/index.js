
// const baseUrl ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed';
// const latestPostContainer = document.querySelector(".galleryshow");

// async function latestPost(url) {
//   const response = await fetch(url);
//   const posts = await response.json();
//   console.log(posts);
  
//     for (let i = 0; i < posts.length; i++) {
//       if (!posts[i]._embedded["wp:featuredmedia"]["0"].categories_names["6"]["0"].name) {
//         continue
//       }
      
//       latestPostContainer.innerHTML += `
//        <div class='gallery one'>

//           <div class='gallery-picture'style="background-image:url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
//           <span class='latest-post-text'><h3>${posts[i]._embedded["wp:featuredmedia"]["0"].title.rendered}</h3></span>
//         </div>
//             `
//     }

  
// }
// latestPost(baseUrl);




const galleryOne = document.querySelector(".one");

const galleryTwo = document.querySelector(".two");

const galleryThree = document.querySelector(".three");

const prevButton = document.querySelector(".prev");

const nextButton = document.querySelector(".next");

function prevChange() {
  
  galleryOne.style.display ="flex"
  galleryTwo.style.display ="none"
 
 
}

prevButton.onclick = prevChange;


function nextChange() {
  
  galleryTwo.style.display ="flex"
  galleryOne.style.display ="none"
 
 
  
}

nextButton.onclick = nextChange;



const baseUrl ='';
const featuredPostContainer = document.querySelector(".featured-blog");

async function latestPost(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);
  
    for (let i = 0; i < posts.length; i++) {
      
      if (i===6) {
        break;
      }
      
      featuredPostContainer.innerHTML += `
       <div class='ft-blog'>
          <div class='featured-blog-picture'style="background-image:url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
          <span class='featured-blog-picture '><h5>${posts[i]._embedded["wp:featuredmedia"]["0"].title.rendered}</h5></span>
        </div>
            `
    }

  
}
latestPost(baseUrl);