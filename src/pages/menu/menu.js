import createLayoutTemplate from "../createLayoutTemplate";
import clearPageContent from "../clearPageContent";
import menuImage from "../../images/Menu.png";
const titleContent = "Menu";
const mainContent = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

export default function meunEventListener() {
    window.addEventListener("load", ()=>{
        const meunBtn = document.querySelector("#menu-nav-btn");
        meunBtn.addEventListener("click",()=>{
            clearPageContent();
            createLayoutTemplate(titleContent,menuImage,mainContent);
        });
    });
};