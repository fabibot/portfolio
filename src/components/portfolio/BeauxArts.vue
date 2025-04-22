<template>
    <div class="d-flex justify-content-center">
        <div>
            <div class="d-flex m-5 align-items-center">
                <div v-for="(projet, index) in projetBeauxArts">
                    <div :class="`img-${index}`">
                        <img :src="getImagePath(projet.image)" alt="" class="img-projet m-2">
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
    .img-0 img {
        width: 180px;
    }

    .img-1 img {
        width: 80px;
        border: solid rgba(176, 176, 176, 0.458);
    }

    .img-2 img {
        width: 50px;
    }

    .img-0 {
        background-image: url(../../assets/images/gribouillis/gribouilli-eclat-2.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 50px 30px 30px 60px;
    }

    .img-1 {
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-3.png);
        background-size: contain;
        padding: 15px;
    }
</style>