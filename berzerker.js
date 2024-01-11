class Berzerker extends Personnage {
    constructor(nom) {
      super(nom, 8, 4, 0);
      this.nom = nom;
    }
  
    attaqueSpeciale() {
      this.gagnerAttaque(1);
      this.subirDegats(1);
      console.log(`${this.nom} utilise Rage et gagne +1 attaque pour tout le reste de la partie, mais perd 1 point de vie.`);
    }
  }
  