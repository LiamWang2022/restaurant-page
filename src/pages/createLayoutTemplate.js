export default function createLayoutTemplate(...para) {
    const contenteContainer = document.querySelector("#content")
    const layoutContainer = document.createElement('div');
    const title = document.createElement('h1');
    const imageContainer = document.createElement('img');
    const pageContent = document.createElement('div');

    layoutContainer.style.width = '50dvw';
    layoutContainer.style.display = 'flex';
    layoutContainer.style.flexDirection = 'column';
    layoutContainer.style.alignItems = 'center';
    layoutContainer.style.justifyContent = 'center';
    
    imageContainer.style.height = "500px";
    imageContainer.style.paddingBottom = "30px"

    pageContent.style.fontSize = "24px"

    title.innerText = para[0];
    imageContainer.src = para[1];
    pageContent.innerText = para[2];
    
    
    contenteContainer.appendChild(layoutContainer);
    layoutContainer.appendChild(title);
    layoutContainer.appendChild(imageContainer);
    layoutContainer.appendChild(pageContent);
}