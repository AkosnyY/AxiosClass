class Personne {
    constructor(nom, age) {
    this.nom = nom;
    this.age = age;
    function display() {
        console.log(this.nom + this.age)
    }
};}

let Personne1 = new Personne ('bastien', '19')
let Personne2 = new Personne ('Daishi', '49')
console.log(Personne1, Personne2)