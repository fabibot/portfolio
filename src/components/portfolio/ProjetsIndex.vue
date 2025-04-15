<template>
    <div class="projet-index container-fluid">
        <div class="p-4 d-flex">
        <RouterLink to="/cv">retour au cv</RouterLink>
        <h1>Explorez les projets</h1>
    </div>
    <div class="grid-projet">
        <div v-for="projet in projetList" class="p-4">
            <div class="border-solid">
                <img :src="getImagePath(projet.image)" alt="" class="rounded">
            <p class="text-right cascadia-sb">
                {{ projet.nom }}
            </p>
        </div>

        </div>
    </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import projetList from '@/assets/images/projets/projetData';

function getImagePath (filename) {
  return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
}


</script>

<style scoped>
    .projet-index {
        background-color: var(--color-3);
        height: 100vh;
    }
    .grid-projet {
        display: grid;
        grid-template-columns: repeat(4, 25%);
    }
    .grid-projet img {
        width: 100%;
    }
    .border-solid {
        border: solid 3px black;
        padding: 10px;
        transition: all 0.3s;
    }
    .border-solid:hover {
        box-shadow: 0px 0px 0px 7px black;
    }

</style>