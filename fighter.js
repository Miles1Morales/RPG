class Fighter extends Personnage {
  constructor(nom) {
    super(nom, 12, 4, 40);
    this.nom = nom;
  }

  attaqueSpeciale(cible) {
    if (this.mana >= 20) {
      cible.subirDegats(5);
      console.log(`${this.nom} utilise Dark Vision et inflige 5 dégâts à ${cible.nom}.`);
      this.mana -= 20;
      console.log(`${this.nom} subit 2 dégâts de moins par coup reçu au prochain tour.`);
    } else {
      console.log(`${this.nom} n'a pas assez de mana pour utiliser Dark Vision.`);
    }
  }
}
