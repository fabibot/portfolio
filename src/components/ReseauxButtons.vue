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
          <RouterLink :to="getNextPage()">
              <button :class="{'icon-btn': true, 'logo': true, 'my-4': true, 'fond-jaune': true, [getNextPageIcon()]: true}" :title="`explorer le ${getNextPageTitle()}`"></button>
          </RouterLink>
      </div>
      <div class="download-btn">
          <button title="télécharger le cv" class="telecharger icon-btn"></button>
      </div>

      <div>
  </div>
</template>

<script setup>
    const props = defineProps({
        info: Object
    })

    import { useRoute } from 'vue-router'
    const route = useRoute()

    function getNextPage() {
    return route.name === 'Projets'
        ? { name: 'Cv' }
        : { name: 'Projets' }
    }

    function getNextPageIcon() {
    return route.name === 'Projets'
        ? 'cv'
        : 'navette'
    }

    function getNextPageTitle() {
    return route.name === 'Projets'
        ? 'cv'
        : 'portfolio'
    }
</script>

<style>
   .column-btn {
    grid-column: 3/4;
   }
   .download-btn {
    position: fixed;
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