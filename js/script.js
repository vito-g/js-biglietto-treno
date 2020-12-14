var percorrenza = prompt('Salve! Inserisca la percorrenza sino a destinazione');
console.log('La sua percorrenza è di: ' + percorrenza + 'km.');

var età = prompt('Adesso, inserisca la sua età');
console.log('La sua età è di: ' + età + 'anni');

var defaultCost = 0.21 * percorrenza;
console.log('Il costo predefinito del biglietto è di: ' + defaultCost + 'euro');

var discountedCost = document.getElementById('output');

if ( età < 18) {
  discountedCost.innerHTML = 'Il costo del biglietto per la sua fascia d\'età è di: ' + (defaultCost * 0.8) + 'euro';
} else if ( età > 65) {
  discountedCost.innerHTML = 'Il costo del biglietto per la sua fascia d\'età è di: ' + (defaultCost * 0.6) + 'euro';
} else {
  discountedCost.innerHTML = 'Il costo del biglietto per la sua fascia d\'età è di: ' + defaultCost + 'euro';
}
