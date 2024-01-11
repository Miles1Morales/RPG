class Personnage {
    constructor(nom, hp, dmg, mana) {
      this.nom = nom;
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.status = "playing";
    }
  
    subirDegats(degats) {
      this.hp -= degats;
      if (this.hp <= 0) {
        this.hp = 0;
        this.status = "loser";
      }
    }
  
    attaquer(cible) {
      if (cible.status === "playing") {
        cible.subirDegats(this.dmg);
        console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${this.dmg} points de dégâts.`);
      }
    }
  
    attaqueSpeciale(cible) {

    }
  }
  