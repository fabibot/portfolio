<template>
    <div class="projet-index container-fluid">
        <!-- <div class="p-4 pb-0 d-flex align-items-center">
            <RouterLink to="/" class="me-3">
                <button class="icon-btn logo retour medium" title="retour au cv"></button>
            </RouterLink>
            <h1>Explorez les projets</h1>
        </div> -->
        <div>
            <h1>
                <RouterLink to="/" class="">
                    <span class="icon-btn logo retour medium"></span>
                </RouterLink>
                Explorez les projets
            </h1>
        </div>
    <div class="projet-index-content d-flex flex-column align-items-center">
        <div class="projet-groupe m-5 w-75">
            <ProjetEpingle :projetEpingle="projetList[7]"></ProjetEpingle>
        </div>
        <div class="projet-groupe m-5 w-75">
            <Deambulations :projetDeambulation="[projetList[0], projetList[2], projetList[1]]"></Deambulations>
        </div>
            <div class="projet-groupe m-5 w-75">
                <ProjetClassique :projetClassique="[projetList[8], projetList[5], projetList[4]]"></ProjetClassique>
            </div>
        <div class="projet-groupe m-5 w-75">
            <BeauxArts :projetBeauxArts="[projetList[7], projetList[3]]"></BeauxArts>
        </div>
    </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import projetList from '@/assets/images/projets/projetData';
    import ProjetEpingle from './ProjetEpingle.vue';
    import Deambulations from './Deambulations.vue';
    import BeauxArts from './BeauxArts.vue';
    import { onMounted } from 'vue'
    import ProjetClassique from './ProjetClassique.vue';


    function getImagePath (filename) {
    return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
    }

    onMounted(() => {
        const indexDiv = document.getElementsByClassName("projet-groupe");
        if(indexDiv) {
            for(let i = 0; i < indexDiv.length; i++) {
                let divImg = indexDiv[i].getElementsByClassName("img-projet");
                let divCard = indexDiv[i].getElementsByClassName("card-projet")[0];
                for(let j = 0; j < divImg.length; j++ ) {
                    divImg[j].addEventListener( "mouseover", () => {
                        divCard.style.boxShadow = "inset 460px 0 var(--color-1)"
                    } );
                    divImg[j].addEventListener( "mouseleave", () => {
                        divCard.style.boxShadow = ""
                    } );
                }
            }
        } 
    });

</script>

<style scoped>
    .projet-index {
        height: 100vh;
    }

    .grid-projet {
        display: grid;
        grid-template-columns: repeat(4, 25%);
    }
    .grid-projet img {
        width: 100%;
    }

    .projet-index h1 a {
        display: inline-flex;
    }
    
    @media (max-width: 925px) {
        h1 {
            font-size: 3rem !important;
        }
    }

    @media (max-width: 900px) {
        .projet-groupe > div {
            flex-direction: column;
        }
        .projet-groupe {
            margin: 0 !important;
        }
    }

    @media (max-width: 520px) {
        .projet-groupe {
            width: 95% !important;
        }
    }

</style>