/**
 * @author Konate Mamadou_K
 */

/* *************** Exercice 1 ************* */

function calculateTip() {

    /**
     * @description cette fonction permet de calculer le pourboir de chaque personne dois laisser
     * en fonction du montant de la facture, de la qualité de service et du nombre e personnes assise à la table
     * @param billAmount
     * @param serviceQuality
     * @param numberOfPeople
     */

    // recuperer le montant de la facture
    let billAmount = document.querySelector("#billamt").value;
    // recuperer la note pour la qualité de service
    let serviceQuality = document.querySelector("#serviceQual").value;
    // recuperer le nombre de personne assise autour de la table
    let numberOfPeople = document.querySelector("#peopleamt").value;

    if(serviceQuality == 0 || billAmount.length == 0) {
        alert("please, enter service quality and the amount bill");
    }

    if(numberOfPeople.length == 0 || numberOfPeople < 1) {
        numberOfPeople = 1;
    }

    let eachElem = document.getElementById('each');
    eachElem.style.display = "none";

    // total : pourboir que chaque personne dois laisser

    let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);
    console.log(total)

    let totalTip = document.getElementById("totalTip");
    totalTip.style.display = "block";
    let tip = document.getElementById("tip");
    tip.textContent = total
};

// masquer par défaut les éléments d'affichade de pourboir
let totalTip = document.getElementById("totalTip");
totalTip.style.display = "none";

let btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener('click', calculateTip);

/* ************ End Exercice 1 **************** */

/**
 * @author Konate Mamadou_K
 */
