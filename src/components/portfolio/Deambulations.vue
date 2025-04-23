<template>
    <div class="d-flex justify-content-center">
        <CardProjet titre="Déambulations Numériques" description="Lorem Ipsu text explicati pour le rpojet de décembre 20123. Contenu sans contenu pour explicatif du projet."/>
        <div class="d-flex align-items-top">
             <div v-for="projet in projetDeambulation">
                <div :class="[`img-${projet.titre}`]">
                    <img :src="getImagePath(projet.image)" alt="" class="img-projet m-2">
                </div>
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
    .img-Abysse, .img-Bauhaus, .img-Time {
        position: relative;
    }

    .img-Abysse {
        top: 60px;
        left: 10px;
        padding: 20px;
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-2.png);
        background-size: contain;
        animation: 3s mouvement-scale linear infinite;

    }
   .img-Abysse img {
        width: 80px;
        animation: 3s static-scale linear infinite;

    }

    .img-Time {
        top: -20px;
        left: 20px
    }

    .img-Time img {
        width: 100px;
    }

    .img-Bauhaus {
        top: 60px;
        padding: 35px;
        background-image: url(../../assets/images/gribouillis/gribouilli-eclat-1.png);
        background-size: contain;
        animation: 1s mouvement-eclat linear infinite;
    }
    .img-Bauhaus img {
        width: 150px;
        animation: 1s static-eclat linear infinite;
    }

    

</style>