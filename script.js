const img_container = document.querySelector(".img-container");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addImages();
});

let imageNumber = 10;

function addImages() {
  for (let i = 0; i < imageNumber; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = `https://picsum.photos/200/200?random=${Math.floor(
      Math.random() * 2000
    )}`;
    img_container.append(imgEl);
  }
}
