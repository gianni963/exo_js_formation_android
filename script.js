//année bissextile
const annee = parseInt(prompt('Veuillez saisir une année !'));

if(isNaN(annee)){
    alert("veuillez entrer un nombre!")
}
else if((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
	alert(annee + " est bissextile");
    console.log(`${annee} est bissextile !`);
} else {
	alert(`${annee} n'est pas bissextile !`);
}