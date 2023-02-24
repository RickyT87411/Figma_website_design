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
/*(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();*/

/*const video = document.getElementById("#sign-in");
const top = document.getElementById("#locations");
const intro = document.getElementById("#videos");
const tours = document.getElementById("#articles");

const videoBlock = document.querySelector("video");
const topBlock = document.querySelector("top");
const introBlock = document.querySelector("intro");
const toursBlock = document.querySelector("tours");

videoBlock.addEventListener("click", function () {
  video.scrollIntoView({
    behavior: "smooth",
  });
});

topBlock.addEventListener("click", function () {
  top.scrollIntoView({
    behavior: "smooth",
  });
});

introBlock.addEventListener("click", function () {
  intro.scrollIntoView({
    behavior: "smooth",
  });
});

toursBlock.addEventListener("click", function () {
  tours.scrollIntoView({
    behavior: "smooth",
  });
});*/

const video = document.getElementById("sign-in");
const top = document.getElementById("locations");
const intro = document.getElementById("videos");
const tours = document.getElementById("articles");
const scroll = document.querySelectorAll("js-scroll");

scroll.addEventListener("click", function () {
  video.scrollIntoView();
  video.scrollIntoView(false);
  video.scrollIntoView({
    block: "end",
  });
  video.scrollIntoView({
    behavior: "smooth",
  });
});
scroll.addEventListener("click", function () {
  top.scrollIntoView();
  top.scrollIntoView(false);
  top.scrollIntoView({
    block: "end",
  });
  top.scrollIntoView({
    behavior: "smooth",
  });
});

scroll.addEventListener("click", function () {
  intro.scrollIntoView();
  intro.scrollIntoView(false);
  intro.scrollIntoView({
    block: "end",
  });
  intro.scrollIntoView({
    behavior: "smooth",
  });
});

scroll.addEventListener("click", function () {
  tours.scrollIntoView();
  tours.scrollIntoView(false);
  tours.scrollIntoView({
    block: "end",
  });
  tours.scrollIntoView({
    behavior: "smooth",
  });
});
