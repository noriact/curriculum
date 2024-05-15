import data from "../../data/data";
import "./AboutMe.css";

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <h2 class="love-light-regular">My motto is love animals, have fun, drink matcha</h2>
      <div class="avatar nori-picture"></div>
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`
        )
        .join("")}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector(".avatar");

  avatar.addEventListener("click", (e) => {
    e.target.classList.add("otter-picture");
    e.target.classList.add("rotate");
    e.target.classList.remove("nori-picture")
  });
  
  avatar.addEventListener("animationend", (e) => {
    e.target.classList.add("nori-picture");
    e.target.classList.remove("rotate");
    e.target.classList.remove("otter-picture")
  });
}