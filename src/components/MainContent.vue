<template>
    <div class="main-grid">
        <div class="column-1">
            <div class="fond-jaune div-prenom sticky-top">
                <div class="rotate-prenom">
                <h1 class="octarine-b">{{ info.prenom }} {{ info.nom }}</h1>
            </div>
            </div>
        </div>
        <div class="column-2">
            <div class="div-image"></div>
            <div class="div-nom">
                <h1 class="color-bleu octarine-b">Developpeuse Front-end</h1>
            </div>
            <InfoPersonnelles v-bind:coordonnees="info.coordonnees" class="d-flex align-items-end"></InfoPersonnelles>

            <div class="div-desc py-4">
                <Description v-bind:description="info.description"></Description>
                <Competence v-bind:competence="info.competance"></Competence>        
            </div>
        </div>
        <div class="column-3">
            <div class="div-experience">
                <ExperiencesProfessionelles v-bind:experience="info.experience"></ExperiencesProfessionelles>
            </div>
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
        <div class="column-4">
            <div class="reseaux-btn">
                <a href="">
                <div class="logo insta mb-4"></div>
                </a>
                <a href="">
                <div class="logo github my-4"></div>
                </a>
                <a href="">
                <div class="logo linkedin my-4"></div>
                </a>
                <button class="icon-btn logo navette my-4 fond-jaune"></button>
            </div>
            <div class="home-btn">
                <button title="télécharger le cv" class="telecharger icon-btn"></button>
            </div>
        </div>

    </div>

</template>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 5% 40% 1fr 5%;
        column-gap: 15px;
    }

    .column-1 {
        grid-row: 1 / 4;
    }
    .column-2 {
        display: grid;
        grid-template-columns: 138px 1fr;
        grid-template-rows: 145px 101px 1fr;
        column-gap: 25px;  
        position: sticky;
        top: 0;  
        height: min-content;    
    }

    .column-3 {
        margin: 50px
    }

    /* btn right */
    .home-btn {
    position: fixed;
    z-index: 2000;
    bottom: 30px;
    right: 30px;
  }
  .reseaux-btn {
    position: fixed;
    z-index: 2000;
    top: 20px;
    right: 30px;
  }

  .logo.navette {
    box-shadow: 0px 0px 0px 7px var(--color-1);
    border-radius: 2px;
    transition: all ease 0.5s
  }

  button.telecharger {
    background-image: url(../assets/logos/telecharger.png);
    background-size: contain;
    height: 70px;
    width: 70px;
    background-color: transparent;
  }
  .logo.navette:hover {
    box-shadow: 0px 0px 0px 14px var(--color-1);
  }
    /*....*/
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
        background-image: url(../assets/images/P1130427-gris.JPG);
        background-position: center;
        background-size: 165%;
    }
    .div-nom {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
    }
    .div-desc {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
    }

    .div-info {
        grid-row: 2 / 3;
        grid-column: 2/ 3;
    }
    .div-experience {
        grid-row: 3 / 4;
        grid-column: 4/ 5;
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
