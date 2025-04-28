<template>
    <div class="d-deambulations d-flex justify-content-center">
        <CardProjet 
            titre="Déambulations Numériques"
            date="Décembre 2023" 
            description="Plongez dans un minuscule océan, faites vriller le temps ou improvisez-vous artiste du Bauhaus... Ce projet regroupe trois petites expériences qui invitent à déambuler sans but précis."
        />
        <div class="div-images d-flex align-items-top">
             <div v-for="(projet, index) in projetDeambulation">
                <div :class="[`img-${index}`]">
                    <a :href="projet.lien" target="_blank">
                        <img :src="getImagePath(projet.image)" alt="" class="img-projet m-2">
                    </a>
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
    .img-0, .img-2, .img-1 {
        position: relative;
    }

    .img-0 {
        top: 60px;
        left: 10px;
        padding: 20px;
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-2.png);
        background-size: contain;
        animation: 3s mouvement-scale linear infinite;
    }
   .img-0 img {
        width: 80px;
        animation: 3s static-scale linear infinite;

    }

    .img-1 {
        top: -20px;
        left: 20px
    }

    .img-1 img {
        width: 100px;
    }

    .img-2 {
        top: 60px;
        padding: 35px;
        background-image: url(../../assets/images/gribouillis/gribouilli-eclat-1.png);
        background-size: contain;
        animation: 1s mouvement-eclat linear infinite;
    }
    .img-2 img {
        width: 150px;
        animation: 1s static-eclat linear infinite;
    }

    @media (max-width: 900px) {
        .d-deambulations {
            flex-direction: column-reverse !important;
        }
        .div-images {
            justify-content: flex-end;
        }
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
            width: 125px;
        }
    }
    

</style>