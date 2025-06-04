<template>
    <div class="reverse-900 d-flex justify-content-center">
        <div class="d-flex">
            <CardProjet 
                titre="Beaux-Arts - option numérique" 
                date="Octobre 2022" 
                description="Au travers de ces deux projets, on aborde le langage : celui de l'humain et celui de la machine. Une frontière qui rend la nature profonde de l’ordinateur inaccessible à la plupart des êtres humains."
            />
        </div>
        <div class="div-images d-flex align-items-center">
            <div v-for="(projet, index) in projetBeauxArts">
                <div :class="`img-${index}`">
                    <a :href="projet.lien" target="_blank">
                        <img :src="getImagePath(projet.image)" alt="" class="img-projet">
                    </a>
                </div>
            </div>
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
    .img-0, .img-1 {
        position: relative;
    }

    .img-0 {
        left: 30px;
        top: 105px;
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed-2.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 30px;
        animation: 3.5s  mouvement-scale linear infinite;
    }
    .img-0 img {
        width: 130px;
        animation: 3.5s static-scale linear infinite;
    }
    
    .img-1 {
        left: 36px;
    }
    .img-1 img {
        width: 70px;
    }

    @media (max-width: 600px) {
        .img-1, .img-0 {
            left: 50px;
        }
        .img-0 img {
            width: 125px;
        }
    }
    
    @media (max-width: 900px) {
        .img-0 {
            top: 0;
            left: -30px;
        }
        .img-1 {
            left: 0;
            top: -50px;
        }
    }

</style>