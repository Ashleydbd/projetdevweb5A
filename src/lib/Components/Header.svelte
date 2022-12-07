

<ul class="menu">
  <li>
      <a href="/">Home</a>
  </li>
  <li>
    <a href="/About">About</a>
  </li>
   <li>
    <a href="/Profexp">Professional experiences</a>
  </li>
  <li>
    <a href="/Contact">Contact</a>
  </li>
</ul>

<style>

.menu {
    display: flex;                /* Transformation en flexbox */
    padding:0;                    /* Suppression des marges internes */
    background-color: #6E7E85;       /* Ajout de la couleur d'arrière-plan */
    justify-content: space-around;/* Alignements des liens dans le menu */
}
.menu li {
    list-style-type: none ;       /* Suppression des puces */
  
}
.menu a {
    display:block;                /* Transformation en block */
    min-width: 200px;             /* Largeur minimale des liens */   
    
    margin: 0.5rem;               /* Marges externes */
    padding: 0.4rem 0;            /* Marges internes */
    text-align: center;           /* Centrage du texte */   
    background-color: #92B5B5;    /* Arrière-plan */
    color: #fff;                  /* Couleur du texte */
    text-decoration: none;        /* Suppression du soulignement */
    border: 1px solid #fff;       /* Ajout d'une bordure */
    border-radius: 4px;           /* Arrondis des bordures */
    
    transition: all 1s ;          /* Ajout des effets de transition */
}
.menu a.actif {    
    background-color: #000 ; 
    color: #BBBAC6 ;
    border-color: #BBBAC6 ;
}
.menu a:hover,
.menu a:hover.actif{
    background-color: #1C0F13;
    color: #E2E2E2;
    border-color: #1C0F13;
}
</style>