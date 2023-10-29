// To do
// 1. Initialiser dessin
// 2. Publier application sur Github
// 3. Reecrire initialiser dessin en 'for' classique

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const flagsLeft = document.querySelector('#flags-left')
  const result = document.querySelector('#result')
  const newGameButton = document.getElementById('new_game_btn')
  const taille_grille = document.getElementById('taille_grille').value
  const indices_haut = document.querySelector('#indices_haut table tr')
  const indices_gauche = document.querySelector('#table_gauche')
  let width = 10
  let bombAmount = 20
  let flags = 0
  let squares = []
  let isGameOver = false

  const grille = []
  let nb_lignes = 10
  let nb_colonnes = 10

  //Create Board
  function obtenir_dessin() {

    const lignes_occupees = []

    for(let i = 0; i < width*width; i++) {
      
      // Créer table des indices colonnes
      if(i < width) {
        const cell = document.createElement('td')
        cell.classList.add('table_cell')

        for(let i = 0; i < 5; i++) {
          const indice_col = document.createElement('p')
          indice_col.textContent = i
          cell.appendChild(indice_col)
        }

        indices_haut.appendChild(cell)
      }
      
      // Créer table des indices lignes
      if(i < width) {
        const row = document.createElement('tr')
        const cell = document.createElement('td')
        row.appendChild(cell)
        cell.classList.add('table_cell')

        for(let i = 0; i < 5; i++) {
          const indice_ligne = document.createElement('span')
          indice_ligne.textContent = i
          cell.appendChild(indice_ligne)
        }
        
        indices_gauche.appendChild(row)
      }

    }

    // Remplir le tableau avec des valeurs de faux;
    // on initialise la grille en faux
    for(let i = 0; i < nb_lignes; i++) {
      grille[i] = [] // chaque ligne est un tableau
      for(let j = 0; j < nb_colonnes; j++) {
        grille[i][j] = false
      }
    }

    // Creer la grille (initialiser dessin avec une case noire par colonne)
    for (let i = 0; i < nb_lignes; i++) {

      let j = Math.floor(Math.random() * nb_colonnes)
      while(lignes_occupees.includes(j)) {
        j = Math.floor(Math.random() * nb_colonnes)
      }
      grille[i][j] = true
      for(let i = 0; i < nb_colonnes; i++) {
        const square = document.createElement('div')
        if ( i == j ) {
          square.classList.add('noirci')
        } 
        grid.appendChild(square)
      }
  
      lignes_occupees.push(j)

      console.log('i: ' + i, ',', 'j: ' + j, grille[i][j])
      console.log()
    }
 
    // Traitement de bord
    // for (let i = 0; i < nb_lignes; i++) {
    //   if(i == 0) {

    //   }
    //   for (let j = 0; j < nb_lignes; j++) {

    //   }
    // }


  } // fin "obtenir_dessin"

  newGameButton.addEventListener('click', () => {
    location.reload()
  })

  function a_voisin_bas(tableau, ligne, colonne) {
    if(ligne < nb_lignes - 1) {
      for(let i = colonne - 1; i <= colonne + 1; i++ ) {
        if(tableau[ligne + 1][i]) {
          return i
        }
      }
      return false
    }
    return -1
  }

  function a_voisin_haut(tableau, ligne, colonne) {
    if(ligne > 0) {
      for(let i = colonne - 1; i <= colonne + 1; i++ ) {
        if(tableau[ligne - 1][i]) {
          return i
        }
      }
      return false
    }
    return -1
  }
 
  function a_voisin_gauche(tableau, ligne, colonne) {
    if(colonne > 0) {
      for(let i = ligne - 1; i <= ligne + 1; i++ ) {
        if(tableau[i][colonne - 1]) {
          return i
        }
      }
      return false
    }
    return -1
  }
 
  function a_voisin_droite(tableau, ligne, colonne) {
    if(colonne < nb_colonnes -1) {
      for(let i = ligne - 1; i <= ligne + 1; i++ ) {
        if(tableau[i][colonne - 1]) {
          return i
        }
      }
      return false
    }
    return -1
  }
  
  obtenir_dessin()
  
  console.log('a_voisin_bas: ' + a_voisin_bas(grille, 9, 4)) // (tableau, ligne, colonne)
  console.log('a_voisin_haut: ' + a_voisin_haut(grille, 4, 4))
  console.log('a_voisin_gauche: ' + a_voisin_gauche(grille, 4, 4))
  console.log('a_voisin_droite: ' + a_voisin_droite(grille, 4, 4))

  function assigner_voisine() {

  }

  function algorithme_3(tableau) {
    for (let i = 1; i < nb_lignes; i++) {

      for(let j = 1; j < nb_colonnes; j++) {
        if(tableau[i][j]) {
          if(
            ! a_voisin_haut(tableau, i, j) &&
            ! a_voisin_bas(tableau, i, j) &&
            ! a_voisin_gauche(tableau, i, j) &&
            ! a_voisin_droite(tableau, i, j)
          ) {
            let precedente = tableau[i][j]
            let actuelle = assigner_voisine()
          }
        }
      }
    
    }
  }


}) // document
