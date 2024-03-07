const createNewElement = (tag, className, text, dataName) => {
  const newElement = document.createElement(tag);

  newElement.classList.add(className);

  if (text) {
    newElement.innerText = text;
  }

  if (dataName) {
    newElement.dataset.name = dataName;
  }

  return newElement;
};

const li = createNewElement("li", "skills__column", undefined, "typescript");
const h2 = createNewElement("h2", "skills__title", "Eslint");
const span = createNewElement("span", "skills__years", "2 years");

li.appendChild(h2);
li.appendChild(span);

const jsElement = document.querySelector("[data-name=Javascript]");
console.log(jsElement);

jsElement?.insertAdjacentElement("afterend", li);
const skillsArray = [
  {
    name: "HTML",
    experience: "2022",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2022",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2023",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2023",
    type: "frontend",
  },

  {
    name: "Python",
    experience: "2023",
    type: "backend",
  },
  {
    name: "Sass",
    experience: "2023",
    type: "frontend",
  },
  {
    name: "Tailwind",
    experience: "2023",
    type: "frontend",
  },
  {
    name: "Bootstrap",
    experience: "2023",
    type: "frontend",
  },
];

/////////////////////////

const skillsSection = document.querySelector("#skills");
const currentYear = new Date().getFullYear();
const addListItem = (listItem) => `<li class="skills__column" data-type="${
  listItem.type
}" data-name=${listItem.name}>
  <h2 class="skills__title">${listItem.name}</h2>
  <span class="skills__years">${currentYear - listItem.experience} years</span>
  </li>`;
const listItem = skillsArray.map((listItem) => addListItem(listItem)).join(" ");
const unorderList = `<ul class="skills__list">${listItem}</ul>`;
skillsSection?.insertAdjacentHTML("beforeend", unorderList);

/////////////////////////

document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(
      ".skills__list"
    ).classList = `skills__list ${element.dataset.type}`;
  });
});
///////////////////////////
const images = document.querySelectorAll(".projects__img");

const imgSlider = function () {
  const triggerBottum = (window.innerHeight / 5) * 4;
  images.forEach((img) => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottum) {
      img.classList.add("show");
    } else {
      img.classList.remove("show");
    }
  });
};

window.addEventListener("scroll",imgSlider);