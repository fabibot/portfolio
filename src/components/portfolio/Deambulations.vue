<template>
    <div class="reverse-900 d-flex justify-content-center">
        <CardProjet 
            titre="Déambulations Numériques"
            date="Décembre 2023" 
            description="Plongez dans un minuscule océan, faites vriller le temps ou improvisez-vous artiste du Bauhaus... Ce projet regroupe trois petites expériences qui invitent à déambuler sans but précis."
        />
        <div class="grid-img-video div-images align-items-top">
             <div v-for="(projet, index) in projetDeambulation" class="d-flex flex-start align-items-center">
                <div :class="[`img-${index}`]">
                    <a :href="projet.lien" target="_blank">
                        <img :src="getImagePath(projet.image)" alt="" class="img-projet m-2">
                    </a>
                </div>
             </div>
             <video width="100%" autoplay controls>
                <source :src="getVideoPath()" type="video/mp4">
                Your browser does not support the video tag.
            </video>
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
function getVideoPath () {
     return new URL(`../../assets/videos/deambulationinsta.mp4`, import.meta.url).href;
    }
</script>

<style scoped> 
    .grid-img-video {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 2fr;
    }

    video {
        grid-row: 1/2;
        grid-column: 2/3;
    }

    .img-0, .img-2, .img-1 {
        position: relative;
    }

    .img-0 {
        left: 50px;
        padding: 20px;
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-2.png);
        background-size: contain;
        background-repeat: no-repeat;
        animation: 3s mouvement-scale linear infinite;
    }
   .img-0 img {
        width: 80px;
        animation: 3s static-scale linear infinite;

    }

    .img-1 {
        top: -65px;
        left: 20px
    }

    .img-1 img {
        width: 100px;
    }

    .img-2 {
        padding: 35px;
        background-image: url(../../assets/images/gribouillis/gribouilli-eclat-1.png);
        background-size: contain;
        animation: 1s mouvement-eclat linear infinite;
    }
    .img-2 img {
        width: 120px;
        animation: 1s static-eclat linear infinite;
    }

    @media (max-width: 600px) {
        .img-1, .img-0 {
            left: 70px;
        }
        .img-0 img {
            width: 50px;
        }
        .img-1 img {
           width: 80px; 
        }
        .img-2 img {
            width: 90px;
        }
    }

    @media (max-width: 1250px) {
        .grid-img-video {
            display: flex;
        }
        .grid-img-video > div {
            margin: 0px 20px;
        }
        video {
            display: none;
        }

    }
    

</style>