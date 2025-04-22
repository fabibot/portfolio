<template>
    <div class="projet-index container-fluid">
        <div class="header-epingle p-4 d-flex align-items-center">
        <RouterLink to="/cv" class="me-3">
            <button class="icon-btn logo retour medium" title="retour au cv"></button>
        </RouterLink>
        <h1>Explorez les projets</h1>
    </div>
    <div class="d-flex flex-column align-items-center">
        <div class="m-5 w-75">
            <ProjetEpingle :projetEpingle="projetList[1]"></ProjetEpingle>
        </div>
        <div class="m-5 w-75">
            <Deambulations :projetDeambulation="[projetList[0], projetList[2], projetList[1]]"></Deambulations>
        </div>
        <div class="m-5 w-75">
            <BeauxArts :projetBeauxArts="[projetList[3], projetList[4], projetList[5]]"></BeauxArts>
        </div>
    </div>
    <!-- <div class="grid-projet">
        <div v-for="projet in projetList" class="p-4">
            <div class="border-solid">
                <img :src="getImagePath(projet.image)" alt="" class="rounded">
            <p class="text-right cascadia-sb">
                {{ projet.nom }}
            </p>
        </div>

        </div>
    </div> -->
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import projetList from '@/assets/images/projets/projetData';
import ProjetEpingle from './ProjetEpingle.vue';
import Deambulations from './Deambulations.vue';
import BeauxArts from './BeauxArts.vue';

function getImagePath (filename) {
  return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
}


</script>

<style scoped>
    .projet-index {
        /* background-color: var(--color-3); */
        height: 100vh;
    }

    .header-epingle {
        margin: 0 0 40px 0;
    }

    .grid-projet {
        display: grid;
        grid-template-columns: repeat(4, 25%);
    }
    .grid-projet img {
        width: 100%;
    }

    /* .border-solid {
        border: solid 3px black;
        padding: 10px;
        transition: all 0.3s;
    }
    .border-solid:hover {
        box-shadow: 0px 0px 0px 7px black;
    } */

</style>