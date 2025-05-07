import createLayoutTemplate from "../createLayoutTemplate";
import clearPageContent from "../clearPageContent";
import aboutImage from "../../images/About.png";
const titleContent = "About";
const mainContent = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

export default function aboutEventListener() {
    window.addEventListener("load", ()=>{
        const aboutBtn = document.querySelector("#about-nav-btn");
        aboutBtn.addEventListener("click",()=>{
            clearPageContent();
            createLayoutTemplate(titleContent,aboutImage,mainContent);
        });
    });
};