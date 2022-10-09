const search = document.getElementById("search");
const apiLink = `https://api.unsplash.com/search/photos/`;
const id = `yXosKodc6mXgrNe8stN7vlRpIcg3KSARQ9V3UispyoU`;
const imageMainContainer = document.getElementById("img-main-container");
const moreImages = document.querySelector(".more-images-button");
var searchBar = document.getElementById("search-bar");

/*-----------------EVENT LISTENERS------------------------ */

search.addEventListener("click", () => {
  imageMainContainer.innerHTML = "";
  getImages();
  // document.querySelector("input").value = "";
});

moreImages.addEventListener("click", getImages);

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  imageMainContainer.innerHTML = "";
  getImages();
});

/*--------------------FUNCTIONS--------------------- */

//function to get images from unsplash API
async function getImages() {
  const term = document.querySelector(".search-term").value;
  let url = `${apiLink}?client_id=${id}&query=${term}`;

  const response = await fetch(url).then((res) => res.json());

  generateImages(response);
  moreImages.style.display = "block";
}

//function to render Images
function generateImages(data) {
  data.results.forEach((pic) => {
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");

    image.src = pic.urls.regular;
    link.setAttribute("target", "_blank");
    link.href = pic.urls.regular;
    imgContainer.classList.add("img-container");
    image.classList.add("image");

    imageMainContainer.appendChild(imgContainer);
    imgContainer.appendChild(link);
    link.appendChild(image);
  });
}
