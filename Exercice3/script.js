/**
 * @author K_M_KONATE
 */

/* ********** Exercice3 ********** */

(function buildHtmlElements() {

    // configure body

    document.body.style.display = "flex"
    document.body.style.flexDirection = "column"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"

    // build container

    let divContainer = document.createElement("div");
    divContainer.style.display = "flex";
    divContainer.style.flexDirection = "column";
    divContainer.style.justifyContent = "center";
    divContainer.style.alignItems = "center";

    // build title
    let h1 = document.createElement("h1");
    let textNode = document.createTextNode("Ma localisation");
    h1.appendChild(textNode);

    // build btn

    let btn = document.createElement("button");
    let btnValue = document.createTextNode("lancer");
    btn.appendChild(btnValue)

    // build display

    let paragraph = document.createElement("p");
    paragraph.style.display = "none";
    

    // adding nodes to body

    divContainer.appendChild(h1);
    divContainer.appendChild(btn);
    divContainer.appendChild(paragraph);

    document.body.appendChild(divContainer);
    
})();

function searchPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    }
    else{
        alert(`géolocation ne fonctionne pas sur ${navigator.appName}`);
    }
}

function getPosition(position) {
    let paragraph = document.querySelector("p");
    paragraph.style.display = "block";
    paragraph.textContent = `latitude : ${position.coords.latitude} \n longitude : ${position.coords.longitude}`;
}

let button = document.querySelector("button");
button.addEventListener('click', searchPosition);

/**
 * @author K_M_KONATE
 */
