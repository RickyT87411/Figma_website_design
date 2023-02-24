const headerActive = () => {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
};
headerActive();

function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = link.dataset.id;
  video.addEventListener("click", () => {
    let iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function createIframe(id) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";
  return "https://www.youtube.com/embed/" + id + query;
}
findVideos();

// Burger handler //

const menuBurger = () => {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () =>
    menu.classList.remove("header__nav_active")
  );
};
menuBurger();

// Scroll to anchors

/*const articles = document.querySelector("#articles");
const link = document.querySelector('a[href="#articles"]');
link.addEventListener("click", (event) => {
  event.preventDefault();
  articles.scrollIntoView({ behavior: "smooth" });
});*/

const scrollLink = ["articles", "locations", "videos", "sign-in"];

scrollLink.forEach((el) => {
  const link = document.querySelector(".header__link");
  const byId = document.querySelector(".js-scroll");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    byId.scrollIntoView({ behavior: "smooth" });
  });
});
