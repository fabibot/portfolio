<template>
    <div class="d-flex">
        <CardProjet titre="Déambulations Numériques" description="Lorem Ipsu text explicati pour le rpojet de décembre 20123. Contenu sans contenu pour explicatif du projet."/>
        <div class="d-flex">
            <!-- itération dans images -->
             <div v-for="projet in projetDeambulation">
                <img :src="getImagePath(projet.image)" alt="" :class="['img-projet', `img-${projet.titre}`]">
             </div>
        </div>
    </div>
</template>

<script setup>
import CardProjet from './CardProjet.vue';

const props = defineProps({
        projetDeambulation: Object
    })

function getImagePath (filename) {
     return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
    }
</script>

<style scoped> 
   .img-Abysse {
        width: 80px;
    }

    .img-Time {
        width: 100px;
    }

    .img-Bauhaus {
        width: 150px;
    }
</style>