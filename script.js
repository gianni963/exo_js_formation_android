//année bissextile
/*const annee = parseInt(prompt('Veuillez saisir une année !'));

if(isNaN(annee)){
    alert("veuillez entrer un nombre!")
}
else if((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
	alert(annee + " est bissextile");
    console.log(`${annee} est bissextile !`);
} else {
	alert(`${annee} n'est pas bissextile !`);
}
*/
//cotation
const cotation = parseInt(prompt('Veuillez saisir une cotation !'));
const resultatSwitch = document.getElementById('resultat_switch');

switch (cotation) {
    case 20: 
        resultatSwitch.innerHTML = 'Excellent'; 
        break;
    case (cotation >= 17 && cotation < 19): 
        resultatSwitch.innerHTML = 'Très bien'; 
        break;
    case (cotation >= 13 && cotation <= 16): 
        resultatSwitch.innerHTML = 'Bien'; 
        break;
    case (cotation >= 10 && cotation <= 12): 
        resultatSwitch.innerHTML = 'Suffisant'; 
        break;
    case (cotation == 8 || cotation == 9 ): 
        resultatSwitch.innerHTML = 'insuffisant'; 
        break;
    case (cotation >= 0 && cotation <= 7): 
        resultatSwitch.innerHTML = 'Echec'; 
        break;

    default: 
        // Les accolades sont optionnelles
        if(isNaN(cotation)) 
            resultatSwitch.innerHTML = 'BOUMMMMMMMMMMMM!'; 
        else 
            resultatSwitch.innerHTML = 'Valeur en dehors du scope !'; 
        break;
}