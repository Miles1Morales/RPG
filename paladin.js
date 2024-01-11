class Paladin extends Personnage {
    constructor(nom) {
      super(nom, 16, 3, 160);
      this.nom = nom;
    }
  
    attaqueSpeciale(cible) {
      if (this.mana >= 40) {
        cible.subirDegats(4);
        this.soigner(5);
        console.log(`${this.nom} utilise Healing Lighting, inflige 4 dégâts à ${cible.nom} et se soigne de 5 points.`);
        this.mana -= 40;
      } else {
        console.log(`${this.nom} n'a pas assez de mana pour utiliser Healing Lighting.`);
      }
    }
  }
  