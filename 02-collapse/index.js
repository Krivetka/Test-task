let content = document.querySelector(".collapsible__content");
let textVisible = document.querySelector(".collapsible__action--visible");
let textHidden = document.querySelector(".collapsible__action--hidden");
let button = document.querySelector(".collapsible__button");
let isShow = true;
let options = {
  duration: 1300,
  fill: "forwards",
};

button.style.cssText = `
    width: 300px;
    padding: 12px 0;
    background: #ff000033;
    border: 1px solid #23232350;
    border-radius: 5px;
    color: #232323;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  `;

textHidden.style.display = "none";

button.addEventListener("click", () => {
  if (isShow) {
    content.animate(
      [
        { opacity: "100%" },
        { opacity: "50%" },
        { opacity: "1%", display: "none" },
      ],
      options
    );
    button.animate([{ background: "#ff740030" }], options);
    textVisible.style.display = "none";
    textHidden.style.display = "block";
    textHidden.animate([{ opacity: "0%" }, { opacity: "100%" }], options);
    isShow = false;
  } else {
    content.animate(
      [
        { opacity: "1%", display: "block" },
        { opacity: "50%" },
        { opacity: "100%" },
      ],
      options
    );
    button.animate([{ background: "#ff000033" }], options);
    textHidden.style.display = "none";
    textVisible.style.display = "block";
    textVisible.animate([{ opacity: "0%" }, { opacity: "100%" }], options);
    isShow = true;
  }
});
