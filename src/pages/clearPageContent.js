export default function(){
    const contenteContainer = document.querySelector("#content");
    while(contenteContainer.firstChild){
        contenteContainer.removeChild(contenteContainer.firstChild);
    };
}