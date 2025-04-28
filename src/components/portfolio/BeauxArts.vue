<template>
    <div class="d-flex justify-content-center">
        <div>
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
        <div class="d-flex">
            <CardProjet 
                titre="Beaux-Arts - option numérique" 
                date="Octobre 2022" 
                description="Au travers de ces deux projets, on aborde le langage : celui de l'humain et celui de la machine. Une frontière qui rend la nature profonde de l’ordinateur inaccessible à la plupart des êtres humains."
            />
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

    @media (max-width: 600px) {
        .img-1, .img-0 {
            left: 50px;
        }
        .img-0 img {
            width: 125px;
        }
    }
    

</style>