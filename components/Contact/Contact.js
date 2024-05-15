import data from "../../data/data";
import "./Contact.css";

const template = () => {
  return `
    <section class="contact">
        <h2 class="title">Contact me</h2>
        <ul>
            <li>
                <i class="fa fa-envelope"></i>
                <a href=${`mailto:${data.email}>Email</a>`}
            </li>
            <li>
                <i class="fa fa-linkedin"></i>
                <a href=${data.linkedin}>LinkedIn</a>
            </li>
        </ul>
    </section>
  `;
};

export const Contact = () => {
  return template();
};
