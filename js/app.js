const rotateKay = "--rotate";
const menuWrapper = document.querySelector(".menu-wrapper");
const burgerContainer = document.querySelector(".burger");
const imageContainers = document.querySelectorAll(".image-container");
const optionItems = document.querySelectorAll(".option-item");
const rotatedBox = document.querySelector(".rotated-box");
const rotationRatio = 90;
Array.from(optionItems).forEach((item, index) => {
  item.addEventListener("click", () => {
    document
      .querySelector(".image-container.active")
      ?.classList.remove("active");
    imageContainers[index].classList.add("active");
    let value = `${rotationRatio * index}deg`;
    document.body.style.setProperty(rotateKay, value);
  });
});
burgerContainer.addEventListener("click", () => {
  menuWrapper.classList.toggle("visible");
});
