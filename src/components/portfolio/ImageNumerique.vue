<template>
    <div class="container-fluid">
        <div class="d-flex align-items-center">
            <a @click="goRouterBack" class="d-flex me-3">
                <span class="icon-btn logo retour medium"></span>
            </a>
            <h1>
                Explorez les images
            </h1>
            
        </div>
        <div class="mx-5">
          <p class="cascadia-el">Ces images sont le fruit de travaux réalisés sur Figma, Illustrator et Photoshop. Issues de projets personnels, mais aussi de mon projet de diplôme et de mes expériences en stage, elles témoignent de mon travail autour de l’image numérique.
          </p>
        </div>

    <div class="mt-5">
       <div class="gallery">
    <div v-for="(image, index) in gallery" :key="index" class="gallery-item">
        <img :src="getImagePath(image.src)" alt="illustration de projet">
    </div>
</div>
    </div>
    </div>
    <img src="../../assets/images/competence/imageNumerique/" alt="">
</template>

<script setup>
import { goRouterBack } from '../tools/basic-tools';

function getImagePath (filename) {
     return new URL(`../../assets/images/competence/imageNumerique/${filename}`, import.meta.url).href;
    }

const gallery = [
    { src: "logoboite8.2.jpg"},
    { src: "Screenshot_yaketi-2.jpg"},  
    { src: "Testcouleurs05_transparent.png"},
    { src: "saxophone.png"},

    { src: "croquisCarte.png"},
    { src: "accordeon.png"},
    { src: "tripleSalto.png"},
    { src: "papayeDeclinaison.png"},
    { src: "logo-bleu.png"},
    { src: "reneuf8motif1.jpg"},
    { src: "stratDigitale.png"},


    { src: "Testcouleurs06_transparent.png"},
    { src: "logoboite7.jpg" },
    { src: "synthetiseur.png" },
    { src: "studioPapayeLogo.png"},
    { src: "steel_guitar.png"},

    { src: "3screens.png"},
    { src: "Screenshot_yaketi-3.jpg" },
    { src: "tuba.png"},
    { src: "Testcouleurs01_transparent.png"},
]
</script>


<style>


.gallery {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;

  columns: 4;
  column-gap: 30px;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 30px;
}

.gallery-item img {
  display: block;
  width: 100%;
  height: auto;
}


@media (max-width: 800px) {
  .gallery {
    columns: 2;
  }
}

@media (max-width: 500px) {
  .gallery {
    columns: 1;
  }
}
</style>