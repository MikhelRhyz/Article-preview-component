const share = document.querySelector(".share-col");
const socialMedia = document.querySelector(".social-media-container");
const iconsContainer = document.querySelector(".rectangle");
const icons = document.querySelector(".rectangle div:nth-child(1)");
const hiddenShare = document.querySelector(".hidden-share");
let isSocialMediaShow = false;

share.addEventListener("click", function () {

  iconsContainer.classList.add("row");
  icons.classList.add("col-8");
  hiddenShare.classList.add("col-4");

  if (isSocialMediaShow) {
    isSocialMediaShow = false;
    socialMedia.style.display = "none";
    hiddenShare.removeChild(shareIcon);
  } else {
    socialMedia.style.display = "inline-block";
    isSocialMediaShow = true;
  }
});
