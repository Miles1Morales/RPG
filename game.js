// Définissez la classe Game et les autres classes ici...

// Créez un tableau pour stocker les personnages
let personnages = [];

// Fonction pour ajouter un personnage au tableau
function ajouterPersonnage(nom, classe) {
  let personnage;

  // Créez le personnage en fonction de la classe choisie
  switch (classe) {
    case "Fighter":
      personnage = new Fighter(nom);
      break;
    case "Paladin":
      personnage = new Paladin(nom);
      break;
    case "Monk":
      personnage = new Monk(nom);
      break;
    case "Berzerker":
      personnage = new Berzerker(nom);
      break;
    case "Assassin":
      personnage = new Assassin(nom);
      break;
      case "Wizard":
      personnage = new Wizard(nom);
      break;
      case "IceWizard":
      personnage = new IceWizard(nom);
      break;
    default:
      console.log("Classe de personnage non reconnue.");
      return;
  }

  // Ajoutez le personnage au tableau
  personnages.push(personnage);
  console.log(`${personnage.nom} (${classe}) a été ajouté.`);
}

// Fonction pour lancer la partie
function lancerPartie() {
  // Effectuez le traitement pour les tours de jeu ici...
  console.log("La partie a été lancée !");
}

// Fonction pour observer les statistiques des personnages
function watchStats() {
  console.log("Statistiques des personnages :");
  personnages.forEach(personnage => {
    console.log(`${personnage.nom} (${personnage.classe}) - PV: ${personnage.hp}, Mana: ${personnage.mana}, Dégâts: ${personnage.dmg}`);
  });
}
