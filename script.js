//année bissextile
/*const annee = parseInt(prompt('Veuillez saisir une année !'));
const resultatCotation = document.getElementById('resultat_cotation');
if(isNaN(annee)){
    alert("veuillez entrer un nombre!")
}
else if((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
	
    resultatCotation.innerHTML = `${annee} est  bissextile !`;
} else {
	resultatCotation.innerHTML=`${annee} n'est pas bissextile !`;
}

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
*/
//date 
const dateEncodee = prompt('encoder une date au format "DD-MM-YYYY"');
regexDate = /^\d{2}-\d{2}-\d{4}$/;
if (!regexDate.test(dateEncodee)) {
    dateEncodee = prompt('format non valide. encoder une date au format "DD-MM-YYYY"');
}
const date = new Date(dateEncodee);

const day = dateEncodee.slice(0,2);
const month = dateEncodee.slice(4,5);
const year = dateEncodee.slice(6,10);
const formatDate = new Date(year, month -1 , day);
console.log(formatDate);

const dateFormatFr = formatDate.toLocaleDateString('fr-BE');
console.log(dateFormatFr);
const jourDeSemaine = formatDate.getDay();
console.log(jourDeSemaine);