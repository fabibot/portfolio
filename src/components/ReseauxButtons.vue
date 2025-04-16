<template>
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
</template>

<script>
    export default {
    props: {
        info: Object,
    },
    };
</script>

<style>
   .column-btn {
    grid-column: 3/4;
   }
   .download-btn {
    position: sticky;
    z-index: 2000;
    bottom: 30px;
    right: 30px;
  }
  @media (max-width: 1170px) {
    .reseaux-btn {
      display: flex;
    }
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
</style>