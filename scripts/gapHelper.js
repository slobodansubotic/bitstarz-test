const checkFlexGap = () => {
  // create flex container with row-gap set
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  // create two, elements inside it
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  flex.parentNode.removeChild(flex);

  return isSupported;
};

const gapSupported = checkFlexGap();

if (!gapSupported) {
  const programs = document.querySelector(".programs__group");
  const buttonsGroup = document.querySelector(".hero-content__buttons");
  const playlistsGroup = document.querySelector(".playlists__group");
  programs.classList.add("no-gap");
  buttonsGroup.classList.add("no-gap");
  playlistsGroup.classList.add("no-gap");
}
