const imgEle = document.querySelector(".image-container");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.querySelector("img");
console.log(img);

let x = 0;
let timer;

function updateGallery() {
  imgEle.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 2000);
}

updateGallery();

prev.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

next.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
