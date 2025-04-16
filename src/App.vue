<script setup>
import info from './mainData';

</script>

<template>
  <div class="main-grid">
    <div class="column-nom">
      <div class="mini-nom m-4 mt-3 p-1">
              <div class="octarine-b">Fabiola</div>
              <div class="octarine-b">Bellon</div>
          </div>
        <div class="fond-jaune div-prenom sticky-top">
            <div class="rotate-prenom">
              <h1 class="octarine-b">{{ info.prenom }} {{ info.nom }}</h1>
          </div>
        </div>
    </div>
    <div class="column-btn  sticky-top d-flex flex-column justify-content-between">
      <div class="reseaux-btn sticky-top">
          <a :href="info.coordonnees.insta.lien" target="_blank">
          <div class="logo insta mb-4 my-4"></div>
          </a>
          <a :href="info.coordonnees.git.lien" target="_blank">
          <div class="logo github my-4"></div>
          </a>
          <a :href="info.coordonnees.linkedin.lien" target="_blank">
          <div class="logo linkedin my-4"></div>
          </a>
          <RouterLink to="/projets">
              <button class="icon-btn logo navette my-4 fond-jaune" title="explorer les projets"></button>
          </RouterLink>
      </div>
      <div class="download-btn">
          <button title="télécharger le cv" class="telecharger icon-btn"></button>
      </div>
    </div>
    <div class="column-content">
      <RouterView></RouterView>
    </div>
    
  </div>
</template>

<style scoped>
  .mini-nom {
    width: min-content;
    height: min-content;
    display: none;
    background: linear-gradient(to right, var(--color-1) 0px 29px, white 10px 100%);

  }

  .main-grid {
    display: grid;
    grid-template-columns: 5% 90% 5%;
  }
  .column-content {
      grid-column: 2/3;
      grid-row: 1/2;
    }
   /*column btn  */
   .column-btn {
    grid-column: 3/4;
   }
   .download-btn {
    position: sticky;
    z-index: 2000;
    bottom: 30px;
    right: 30px;
  }

  .logo.navette {
    box-shadow: 0px 0px 0px 7px var(--color-1);
    border-radius: 2px;
    transition: all ease 0.5s
  }

  button.telecharger {
    background-image: url(./assets/logos/telecharger.png);
    background-size: contain;
    height: 70px;
    width: 70px;
    background-color: transparent;
  }
  .logo.navette:hover {
    box-shadow: 0px 0px 0px 14px var(--color-1);
  }
    /*....*/

  @media (max-width: 1170px) {
    .main-grid {
      grid-template-columns: 50% 50%;
    }
    .column-nom {
      grid-row: 1/2;
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 3;
    }
    .column-btn {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    .column-content {
      grid-column: 1/3;
      grid-row: 2/3;
    }
    .div-prenom {
      width: auto;
      height: 100%;
      padding: 0px;
      background-color: transparent;
      display: flex;
      align-items: center;
      padding: 10px;
      .rotate-prenom {
          transform: rotate(0deg);
      }
      h1 {
        position: inherit;
        font-size: 2rem;

      }
    }
    .reseaux-btn {
      display: flex;
    }
    .column-btn {
      flex-direction: row !important;
      justify-content: end !important;
      background-color: white;
      .download-btn {
        right: 0px;
        margin: 0px 20px;
        display: flex;
        align-items: center;
      }
      button.telecharger {
        width: 45px;
        height: 45px;
      } 
    }
    .div-prenom {
      display: none;
    }
    .mini-nom {
      display: block;
    }
  }
  @media (max-width: 560px) {
   
  }
</style>


