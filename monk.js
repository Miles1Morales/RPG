class Monk extends Personnage {
    constructor(nom) {
      super(nom, 8, 2, 200);
      this.nom = nom;
    }
  
    attaqueSpeciale() {
      if (this.mana >= 25) {
        this.soigner(8);
        console.log(`${this.nom} utilise heal et se soigne de 8 points de vie.`);
        this.mana -= 25;
      } else {
        console.log(`${this.nom} n'a pas assez de mana pour utiliser heal.`);
      }
    }
  }
  