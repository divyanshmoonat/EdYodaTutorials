var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};


// Get large preview image element and update its value
var largePreviewImage = document.getElementById("largePreview");
largePreviewImage.src = productData.preview;

// Get product name element and update its value
var productName = document.getElementById("productName");
productName.innerText = productData.name;

// Get product brand element and update its value
var productBrand = document.getElementById("prodctBrand");
productBrand.innerText = productData.brand;

// Get product price element and update its value
var productPrice = document.getElementById("productPrice");
productPrice.innerText = productData.price;

// Get product description element and update its value
var productDescription = document.getElementById("productDescription");
productDescription.innerText = productData.description;

// Get preview images wrapper element and generate dynamic images
var previewImagesWrapper = document.getElementById("previewImgs");
var productImages = productData.photos;

// Misc variables
var borderedImageIndex = 0;


// Event listeners callback
function onImagePreviewClickHandler(e) {
    largePreviewImage.src = e.target.src;

    var previewImagesCollection = document.querySelectorAll('.preview-images img');
    //1. Remove border from the previous element
    previewImagesCollection[borderedImageIndex].classList.remove('active');
    //2. Add the border to the current element
    e.target.classList.add('active');
    borderedImageIndex = e.target.id;
}

for (var counter = 0; counter < productImages.length; counter++) {
  var image = document.createElement("img");
  image.src = productData.photos[counter];
  image.id = counter;

  if(counter === 0) { // First image
    image.classList.add('active');
  }

  image.addEventListener('click',onImagePreviewClickHandler);

  previewImagesWrapper.appendChild(image);
}
