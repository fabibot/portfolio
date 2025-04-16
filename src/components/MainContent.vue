<template>
    <div class="main-content-grid">
        <div class="column-2">
            <div class="div-image d-flex justify-content-center">
                <div class="div-image-image"></div>
            </div>
            <div class="div-nom ps-3">
                <h1 class="color-bleu octarine-b">Developpeuse Front-end</h1>
            </div>
            <InfoPersonnelles v-bind:coordonnees="info.coordonnees" class="d-flex align-items-end ps-3 div-info"></InfoPersonnelles>

            <div class="div-desc py-4">
                <Description v-bind:description="info.description"></Description>
                <Competence v-bind:competence="info.competance"></Competence>        
            </div>
        </div>
        <div class="column-3  mt-5 m-3">
            <div class="div-experience">
                <ExperiencesProfessionelles v-bind:experience="info.experience"></ExperiencesProfessionelles>
            </div>
            <div class="column3-grid">
                <div class="div-formation">
                    <Formation v-bind:formation="info.formation"></Formation>
                </div>
                <div class="div-langues">
                    <Langues v-bind:langues="info.langues"></Langues>
                </div>
                <div class="div-hobbies">
                    <Hobbies v-bind:hobbies="info.hobbies"></Hobbies>
                </div>
            </div>
        </div>
        
    </div>

</template>

<style>
    .column3-grid {
        display: grid;
        grid-template-columns: 35% 1fr;
    }
    .div-formation {
        grid-row: 1/2;
        grid-column: 2/3;
    }
    
    .div-langues {
        grid-row: 2/3;
    }
    
    .div-hobbies {
        grid-row: 3/4;
        grid-column: 2/3;
    }
    .main-content-grid {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 15px;
    }
    .column-2 {
        display: grid;
        grid-template-columns: 20% 80%;
        position: sticky;
        top: 0;  
        height: min-content;    
    }
   
    .div-prenom {
        width: 30px;
        height: 530px;
        padding: 10px;
    }
    
    .rotate-prenom {
        transform: rotate(90deg);
    }
    .div-prenom  h1 {
        position: absolute;
        top: -51px;
        left: 20px;
        text-wrap: nowrap;

    }
    .div-image {
        grid-row: 1 / 3;
    }
    .div-image-image {
        background-image: url(../assets/images/P1130427-gris.JPG);
        background-position: 50% 32%;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .div-nom {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    .div-desc {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
    }

    .div-experience {
        grid-row: 3 / 4;
        grid-column: 4/ 5;
    }

    @media (max-width: 1290px) {
    .div-nom {
      grid-column: 1/3;
    }
    .div-image {
        grid-row: 2/3;

    }
    .div-image-image {
        width: 65%;
    }
    .div-desc {
        margin-left: 15px;
    }
    .div-info {
        padding: 0 !important;
    }
  }

  @media (max-width: 1170px) {
    .column-2 h1 {
        font-size: 2.5rem;
    }
    .column-2 {
        width: 50%;
        position: fixed;
        bottom: 0;
        top : auto;
    }
    .column-3 {
        grid-column: 2/3;
    }
  }
  @media (max-width: 1065px) {
    .main-content-grid {
        display: block;
    }
    .column-2 {
        width: auto;
        position: relative;
        padding: 10px 50px;
    }
  }

  @media (max-width: 560px) {
    .div-image-image {
       display: none;
    }
    .div-info {
        grid-column: 1/3;
        grid-row: 2/3;
        margin-left: 15px;
    }
  }

</style>

<script setup>
import InfoPersonnelles from './infoPersonnelles.vue';
import Formation from './cvComposants/Formation.vue';
import ExperiencesProfessionelles from './cvComposants/ExperiencesProfessionelles.vue';
import Description from './cvComposants/Description.vue';
import Competence from './cvComposants/Competence.vue';
import Langues from './cvComposants/Langues.vue';
import Hobbies from './cvComposants/Hobbbies.vue';
import info from '../mainData';

defineProps({
  titre: {
    type: String,
    required: true,
  },
})


</script>
