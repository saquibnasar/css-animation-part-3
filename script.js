const data = [
  {
    heading: "Animation",
    img: "./images/img2.png",
    link: "./html/Animation.html",
    bg: "#959595",
  },
  {
    heading: "Bar animation",
    img: "./images/img3.png",
    link: "./html/Bar animation.html",
    bg: "#0c1856",
  },
  {
    heading: "Button Design",
    img: "./images/img4.png",
    link: "./html/Button Design.html",
    bg: "#262626",
  },
  {
    heading: "Button Effect",
    img: "./images/img5.png",
    link: "./html/Button Effect.html",
    bg: "#fff",
  },
  {
    heading: "Button Hover Effects",
    img: "./images/img6.png",
    link: "./html/Button Hover Effects.html",
    bg: "#fff",
  },
  {
    heading: "Checkbox Animation",
    img: "./images/img7.png",
    link: "./html/Checkbox Animation.html",
    bg: "#9c27b0",
  },
  {
    heading: "Circular Loading",
    img: "./images/img8.png",
    link: "./html/Circular Loading.html",
    bg: "#191a1b",
  },
  {
    heading: "Colorful Loading",
    img: "./images/img9.png",
    link: "./html/Colorful Loading.html",
    bg: "#ffeb3b",
  },
  {
    heading: "Custom Cursor",
    img: "./images/img10.png",
    link: "./html/Custom Cursor.html",
    bg: "#fff",
  },
  {
    heading: "Down Animation",
    img: "./images/img11.png",
    link: "./html/Down Animation.html",
    bg: "#e91e63",
  },
  {
    heading: "Energy Button",
    img: "./images/img12.png",
    link: "./html/Energy Button.html",
    bg: "#1f222d",
  },
  {
    heading: "Flip Loader",
    img: "./images/img13.png",
    link: "./html/Flip Loader.html",
    bg: "#e91e63",
  },
  {
    heading: "Folded Image Effect",
    img: "./images/img14.png",
    link: "./html/Folded Image Effect.html",
    bg: "#fff",
  },
  {
    heading: "Folding Cube",
    img: "./images/img15.png",
    link: "./html/Folding Cube.html",
    bg: "#0073d4",
  },
  {
    heading: "Glowing Checkbox",
    img: "./images/img16.png",
    link: "./html/Glowing Checkbox.html",
    bg: "#262626",
  },
  {
    heading: "Glowing Dots",
    img: "./images/img17.png",
    link: "./html/Glowing Dots.html",
    bg: "#262626",
  },
  {
    heading: "Glowing Dots",
    img: "./images/img18.png",
    link: "./html/Glowing Dots.html",
    bg: "#19385e",
  },
  {
    heading: "Happy Diwali",
    img: "./images/img19.png",
    link: "./html/Happy Diwali.html",
    bg: "#9c27b0",
  },
  {
    heading: "Jumping Text",
    img: "./images/img20.png",
    link: "./html/Jumping Text.html",
    bg: "#fffb4d",
  },
  {
    heading: "Loader Ring",
    img: "./images/img21.png",
    link: "./html/Loader Ring.html",
    bg: "#262626",
  },
  {
    heading: "Loading Page",
    img: "./images/img22.png",
    link: "./html/Loading Page.html",
    bg: "#52e0f3",
  },
  {
    heading: "Loading Page",
    img: "./images/img23.png",
    link: "./html/Loading Page.html",
    bg: "radial-gradient(#2d0000, #000)",
  },
  {
    heading: "Menu hover",
    img: "./images/img24.png",
    link: "./html/Menu hover.html",
    bg: "#ffff61",
  },
  {
    heading: "Neon Button",
    img: "./images/img25.png",
    link: "./html/Neon Button.html",
    bg: "#00041d",
  },
  {
    heading: "Reverse Direction",
    img: "./images/img26.png",
    link: "./html/Reverse Direction.html",
    bg: "linear-gradient(to left, #1366ff, #ff0b6d)",
  },
  {
    heading: "Shining button",
    img: "./images/img27.png",
    link: "./html/Shining button.html",
    bg: "#fff",
  },
  {
    heading: "Text Hover Effect",
    img: "./images/img28.png",
    link: "./html/Text Hover Effect.html",
    bg: "#fff",
  },
];

const carouselinner = document.querySelector(".carousel-inner");
const carous = data.map((e) => {
  return `<div class="carousel-item" style="background: ${e.bg}" ><div class="d-flex justify-content-center align-items-center vh-100 flex-column"><h1>${e.heading}</h1><img src="${e.img}" alt="" /></div><div class="carousel-caption d-none d-md-block"><a href="${e.link}" class="btn btn-main">More Info</a></div></div>`;
});
console.log(carous);
carouselinner.innerHTML += carous;
