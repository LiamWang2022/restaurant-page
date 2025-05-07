import createLayoutTemplate from "../createLayoutTemplate";
import clearPageContent from "../clearPageContent";
import homeImage from "../../images/Home.png";
const titleContent = "Home";
const mainContent = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

export default function homeEventListener() {
    window.addEventListener("load", ()=>{
        const homeBtn = document.querySelector("#home-nav-btn");
        homeBtn.addEventListener("click",()=>{
            clearPageContent();
            createLayoutTemplate(titleContent,homeImage,mainContent);
        });
    });
};