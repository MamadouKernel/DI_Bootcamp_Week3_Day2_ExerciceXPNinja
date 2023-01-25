/**
 * @author K_Mamadou_Konate
 */

(function buildHtmlElements() {

    /**
     * @description création du html
     */

    let form = document.createElement("form");
    let input = document.createElement("input");
    let btnSubmit = document.createElement("input");
    form.setAttribute('name', 'emailForm');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('value', 'valider le mail');
    btnSubmit.setAttribute('name', 'validate');
    input.setAttribute('type', 'email');
    input.setAttribute('name', 'mail');
    form.appendChild(input);
    form.appendChild(btnSubmit);
    document.body.appendChild(form);

    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("your mail is not good");
    paragraph.appendChild(textNode);
    paragraph.style.display = "none";
    document.body.appendChild(paragraph);

})();

function validateEmail() {

    /**
     * @description cette fonction permet de vérifier la validité d'un mail avec regex
     */

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let form = document.forms.emailForm
    let inputEmail = form.elements.mail
    
    if(regex.test(inputEmail.value)) {
        alert("email valide");
    }
    else {
        alert("invalide");
    }

}

let btnSubmit = document.querySelector("[type=submit]");
btnSubmit.addEventListener('click', validateEmail);

/**
 * @author K_Mamadou_K
 */
