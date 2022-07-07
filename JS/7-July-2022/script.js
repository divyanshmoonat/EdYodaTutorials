let posts = [];

let pageNo = 1;
let pageSize = 10;
let morePostsLoaded = false;

//TODO : Make toggle feature on like button

function createPostCard(postObj) {
  const card = $(`
  <div class="card">
  <h3 class="title">${postObj.title}</h3>
  <img
    class="post-img"
    src="${postObj.image}"
    alt="Post"
  />
  <div class="action-items">
    <div class="cta">
      <i class="fa-regular fa-heart"></i>
      <!-- <i class="fa-solid fa-heart"></i> -->

      <i class="fa-regular fa-comment"></i>
    </div>
    <div class="cta">
      <i class="fa-${postObj.saved ? "solid" : "regular"} fa-bookmark"></i>
    </div>
  </div>

  <div class="meta">
    <h5 class="likes">${postObj.likes} Likes</h5>
    <p class="description">
      ${postObj.description}
    </p>
  </div>
</div>
  `);

  return card;
}

function renderPosts() {
  const postsWrapper = $("#postsWrapper");
  for (
    let counter = (pageNo - 1) * pageSize;
    counter < pageNo * pageSize;
    counter++
  ) {
    const card = createPostCard(posts[counter]);
    postsWrapper.append(card);
  }
  pageNo++;
}

function onScrollHandler(e) {
  const scrollHeight = $(window).scrollTop();
  if (scrollHeight >= 3870 - 20) {
    // if (!morePostsLoaded) {
    if (morePostsLoaded === false) {
      renderPosts();
      morePostsLoaded = true;
      // Load 10 more posts here
    }
  }
}

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "./posts.json",
    success: function (data) {
      posts = data;
      renderPosts();
    },
    error: function (err) {
      console.log(err);
    },
  });

  const postsWrapper = $(window);
  console.log(postsWrapper);
  postsWrapper.on("scroll", onScrollHandler);
});
