console.log("Ajax using jQuery");

function onDocumentReadyHandler() {
  console.log("Doc is Ready now");

  var photoGallery = [];

  function onReadyStateChanged(e) {
    console.log("Redy state changed", e);
    if (e.target.readyState === 4) {
      if (e.target.status === 200) {
        //   console.log(JSON.parse(e.target.response));
        photoGallery = JSON.parse(e.target.response);
        renderPhotoGallery();
      }
    }
  }

  var imgGallery = document.getElementById("imgGallery");
  console.log(imgGallery);

  var startingValue = 0;
  var pageSize = 10;
  var pageNumber = 1;

  function renderPhotoGallery() {
    for (
      var counter = startingValue;
      counter < pageNumber * pageSize;
      counter++
    ) {
      var currentImage = photoGallery[counter];

      var imgCard = document.createElement("div");
      imgCard.classList.add("img-card");

      var img = document.createElement("img");
      img.src = currentImage.thumbnailUrl;

      //   $('<img>').attr('src',currentImage.thumbnailUrl);

      var span = document.createElement("span");
      span.innerText = currentImage.title;

      imgCard.append(img, span);

      imgGallery.appendChild(imgCard);
    }
    startingValue += pageSize; // Increase startingValue by 10 every time we click load more btn
    pageNumber++;
  }

  function vAjax() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/photos");
    request.send();
    request.addEventListener("readystatechange", onReadyStateChanged);
  }

  // vAjax();

  // AJAX USING JQUERY

  function onAjaxSuccess(data) {
    console.log("Ajax call successful using jQUery");
    console.log(data);
    photoGallery = data;
    renderPhotoGallery();
  }

  function onAjaxFail() {
    console.log("Ajax call failed using jQuery");
  }

  var ajaxParams = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
    success: onAjaxSuccess,
    error: onAjaxFail,
  };

  console.log(ajaxParams);

  function onLoadMoreClickHandler(e) {
    renderPhotoGallery();
  }

//   $("#loadMoreBtn").on("click", onLoadMoreClickHandler);
  $("#loadMoreBtn").click(onLoadMoreClickHandler);

  //   $.ajax(ajaxParams);
  const imageData = {
    albumId: 123,
    id: 567
  };

  const ajaxPostParams = {
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/photos",
    data: JSON.stringify(imageData),
    headers: {
      "Content-Type": "application/json",
    },
    success: onAjaxSuccess,
    error: onAjaxFail,
  };

  $.ajax(ajaxPostParams);
}

$(document).ready(onDocumentReadyHandler);

// https://jsonplaceholder.typicode.com/photos
// GET


// // Different ways of registering event listeners
// $(<ELEMENT>).on('event name',callbackFn);
// $(<ELEMENT>).click(callbackFn);
// $(<ELEMENT>).keyup(callbackFn);


// // Diff ways of calling ajax in jquery
// $.ajax({params});
// $.get(params);
// $.post(params);