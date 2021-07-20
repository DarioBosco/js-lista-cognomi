var surnames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(surnames);

//1. chiedi all’utente il cognome
var userSurname = prompt('Inserisci il tuo cognome');

//Inserisco anche la prima lettera dell'input maiuscola
var userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
surnames.push(userSurname);

//3. stampa la lista ordinata alfabeticamente
var sortedSurnames = surnames.sort();
console.log(surnames);

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log('La posizione del cognome: ', surnames.indexOf(userSurname) + 1);
