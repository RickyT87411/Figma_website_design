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

const scrollLink = ["articles", "locations", "videos", "sign-in"];

scrollLink.forEach((el) => {
  const link = document.querySelector(`a[href="#${el}"]`);
  const content = document.querySelector(`#${el}`);
  link.addEventListener("click", (event) => {
    event.preventDefault();
    content.scrollIntoView({ behavior: "smooth" });
  });
});

// Modal

/*let modal = $modal({
  title: "Tottori",
  content: "<p>Jump off balcony, onto strangers head. Chase ball of string</p>",
});

document.querySelector(".show-modal").addEventListener("click", function (e) {
  modal.show();
});*/

/*const btn = document.querySelector("btn");
const modals = document.querySelector(".modals");
btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");
    modals.getElementsByClassName.display = "block";
    document.querySelector(`[data-target="${path}"]`);
  });
});*/

/*const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal__overlay");
const modals = document.querySelectorAll(".modal__open");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove(".modal__open");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add(".modal__open");
    modalOverlay.classList.add("modals__overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  modals.forEach((el) => {
    el.classList.remove(".modal__open");
  });

  modalOverlay.classList.remove("modals__overlay--visible");
});*/

const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
