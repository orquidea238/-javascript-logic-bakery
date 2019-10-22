// Prix forêt noire
const farine = 1;
const sucre = 1.5*2;
const oeuf = 3/10;
const lait = 2.5;
const chocolat = 10*2;
const decos = 3.5;
const fruits = 5;

const prixTotal = farine + sucre + oeuf + lait + chocolat + decos;
console.log(prixTotal);

const prixForetNoire = farine + (sucre) + (oeuf*20) + (lait / 2) + chocolat + (decos * 5);
//console.log(prixForetNoire);

// Prix Tarte aux fraises
const prixTarte = (fruits*2) + (farine / 2) + (sucre/2) + (oeuf*5) + (lait/2) + (chocolat / 4) + (decos*2);
//console.log(prixTarte);

// Calcul marges pris tarte
const coef = prompt("Ajoutez une marge")/100;
const prixFinalTarte = (prixTarte*coef) + prixTarte;

console.log(prixFinalTarte);

// Calcul marges pris forêt noire
const coef2 = prompt("Ajoutez une marge")/100;
const prixFinalForet = (prixForetNoire*coef) + prixForetNoire;

console.log(prixFinalForet);

// Tresorie quotidienne
const Tresorie = (prixForetNoire*6) + (prixTarte*6);
console.log(Tresorie*5);

// Recette quotidienne
const recette = (prixFinalForet*6) + (prixFinalTarte*6);
console.log("La recette quotidienne" recette/90*100);



