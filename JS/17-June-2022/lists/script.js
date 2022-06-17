var products = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
    image:
      "https://via.placeholder.com/200.png/09f/fff%20C/O%20https://placeholder.com/",
  },
];

var container = document.getElementById("container");

for (var counter = 0; counter < products.length; counter++) {
  var currentProduct = products[counter];

  var card = document.createElement("div");
  card.classList.add("card"); // Add a css class to the element
  card.classList.add("product");
  // T remove the class form an element
  // ELEMENT.classList.remove('card');

  //   card.id = 'productCard_' + currentProduct.id;
  var img = document.createElement("img");
  img.src = currentProduct.image;

  var span = document.createElement("span");
  span.innerText = currentProduct.id;

  var p = document.createElement("p");
  p.innerText = currentProduct.title;

  //   card.appendChild(img, span, p);
  //   card.appendChild(span);
  //   card.appendChild(p);

  card.append(img, span, p);
  container.appendChild(card);
}

console.log("Hello");
