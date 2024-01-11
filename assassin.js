class Assassin extends Personnage {
    constructor(nom) {
      super(nom, 6, 6, 20);
      this.nom = nom;
    }


    attaqueSpeciale(cible) {
      if (this.mana >= 20) {
        this.invincibleProchainTour = true;
        cible.subirDegats(7);
        console.log(`${this.nom} utilise Shadow Hit et inflige 7 dégâts à ${cible.nom}. Il devient invincible pour le prochain tour.`);
        this.mana -= 20;
      } else {
        console.log(`${this.nom} n'a pas assez de mana pour utiliser Shadow Hit.`);
      }
    }
  }
  