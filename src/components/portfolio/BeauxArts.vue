<template>
    <div class="d-flex justify-content-center">
        <div>
            <div class="div-images d-flex align-items-center">
                <div v-for="(projet, index) in projetBeauxArts">
                    <div :class="`img-${index}`">
                        <img :src="getImagePath(projet.image)" alt="" class="img-projet">
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <CardProjet titre="Beaux-Arts - option numérique" description="Lorem Ipsu text explicati pour le rpojet de décembre 20123. Contenu sans contenu pour explicatif du projet."/>
        </div>
    </div>
</template>

<script setup>
import CardProjet from './CardProjet.vue';

const props = defineProps({
        projetBeauxArts: Object
    })

function getImagePath (filename) {
     return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
    }
</script>

<style scoped>
    .img-0, .img-1, .img-2 {
        position: relative;
    }

    .img-0 {
        left: 30px;
        background-image: url(../../assets/images/gribouillis/gribouilli-eclat-2.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 50px 30px 30px 60px;
        animation: 1s mouvement-eclat linear infinite;
    }
    .img-0 img {
        width: 165px;
        animation: 1s static-eclat linear infinite;
    }
    
    .img-1 {
        top: -85px;
    }
    .img-1 img {
        width: 60px;
        border: solid rgba(176, 176, 176, 0.458);
    }

    .img-2 {
        top: 86px;
        left: -19px;
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-3.png);
        background-size: contain;
        padding: 28px;
        animation: micro-orbite 15s linear infinite;
    }
    .img-2 img {
        width: 100px;
        animation: micro-orbite-reverse 15s linear infinite;
    }

    @media (max-width: 900px) {
        .div-images {
            justify-content: flex-end;
        }
    }

</style>