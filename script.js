document.addEventListener("DOMContentLoaded", () => {
  const nameCyrillic = "Ана Миливоjевић";
  const nameLatin = "Ana Milivojević";

  const elemNameContainerCyrillic = document.getElementById(
    "name-container-cyrillic"
  );
  const elemNameContainerLatin = document.getElementById(
    "name-container-latin"
  );
  const elemNameContainerWebDev = document.getElementById(
    "name-container-webdev"
  );
  const nCharacters = nameCyrillic.length;

  var characterSpansCyrillic = [];
  var characterSpansLatin = [];

  for (var i = 0; i < nCharacters; ++i) {
    const elemSpanCyrillic = document.createElement("span");
    elemSpanCyrillic.innerHTML = nameCyrillic[i];
    elemNameContainerCyrillic.appendChild(elemSpanCyrillic);
    characterSpansCyrillic.push(elemSpanCyrillic);

    const elemSpanLatin = document.createElement("span");
    elemSpanLatin.innerHTML = nameLatin[i];
    elemNameContainerLatin.appendChild(elemSpanLatin);
    characterSpansLatin.push(elemSpanLatin);
  }

  const initialDelayMs = 750;
  const perCharDelayMs = 75;
  var iterations = 0;

  // Iterate from '0' to 'nCharacters'.
  for (const i of Array.from(Array(nCharacters).keys())) {
    const replaceChar = () => {
      characterSpansLatin[i].classList.add("animFadeIn");
      characterSpansCyrillic[i].classList.add("animFadeOut");
    };

    // Adding a delay for a visual effect.
    setTimeout(replaceChar, initialDelayMs + perCharDelayMs * iterations++);
  }

  const squeezeLatinText = () => {
    elemNameContainerCyrillic.remove();
    elemNameContainerLatin.classList.remove("posAbsolute");

    for (var i = 4; i < characterSpansLatin.length; ++i) {
      const char = characterSpansLatin[i];

      char.style.opacity = 1;
      char.classList.add("animSqueeze");
    }
  };

  setTimeout(
    squeezeLatinText,
    initialDelayMs + perCharDelayMs * (iterations + 1)
  );

  setTimeout(() => {
    const elemNameContainerComma = document.createElement("span");
    elemNameContainerComma.classList.add("animFadeIn");
    elemNameContainerComma.classList.add("name-container-comma");
    elemNameContainerComma.innerHTML = ",";
    elemNameContainerLatin.appendChild(elemNameContainerComma);

    elemNameContainerComma.classList.add("animFadeIn");
    elemNameContainerWebDev.classList.add("animFadeIn");
  }, initialDelayMs + perCharDelayMs * (iterations + 7));
});
