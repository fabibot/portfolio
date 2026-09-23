<template>
    <div class="container-fluid">
        <div class="d-flex align-items-center">
            <a @click="goRouterBack" class="d-flex me-3">
                <span class="icon-btn logo retour medium"></span>
            </a>
            <h1>
                Prise de vue réelle
            </h1>
        </div>
        <!-- <div class="mx-5">
          <p class="cascadia-el">ecrire le texte // vidéo à côté et photo en dessous</p>
        </div> -->
        <div class="mt-5 d-lg-flex justify-content-end" style="max-height: 500px; overflow: hidden;">
          <div class="me-4">
            <img class="main-img" style="object-fit: contain;" :src="getImagePath('P1140074-retouche.jpg')" alt="illustration principale">  
          </div>
          <div class="col-lg-6">
            <video width="100%" autoplay controls muted>
                <source :src="getVideoPath()" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </div>

        </div>
         

    <div class="mt-5 row container align-items-end">
      <div class="col-lg-4">
        <img class="main-img" :src="getImagePath('P1130988-retouche.jpg')" alt="illustration principale">  
      </div>
      <div class="col-lg-8">
        <h3 class="octarine-b">Nature morte et bijoux</h3>
        <div class="gallery-scroll scroller" @wheel="scrollHorizontal">
          <img
            v-for="(image, index) in gallery2"
            :key="index"
            :src="getImagePath(image.src)"
              :alt="image.alt || ''"
          />
        </div>
      </div>
    </div>

    
    <div class="mt-5 row container align-items-end">
      <div class="col-lg-8">
        <h3 class="octarine-b">Homo Bulla</h3>
        <div class="gallery-scroll scroller" @wheel="scrollHorizontal">
          <img
            v-for="(image, index) in gallery1"
            :key="index"
            :src="getImagePath(image.src)"
              :alt="image.alt || ''"
          />
        </div>
      </div>
      <div class="col-lg-4">
        <img class="main-img" :src="getImagePath('diplome2.JPG')" alt="illustration principale">  
      </div>
    </div>
      <div style="height: 60px;"></div>
    </div>


</template>

<script setup>
import { goRouterBack } from '../tools/basic-tools';
import { ref } from 'vue'


function getImagePath (filename) {
     return new URL(`../../assets/images/competence/photos-videos/${filename}`, import.meta.url).href;
    }

const scrollHorizontal = (event) => {
      event.preventDefault();

    event.currentTarget.scrollLeft += event.deltaY;
}

const gallery1 = [
    { src: "bulle2.JPG"}, 
    { src: "diplome3.JPG"},
    { src: "diplome4.JPG"},
    { src: "bulle3.JPG"},
    { src: "diplome1.JPG"},
    { src: "bulle4.JPG"},
    { src: "bulle5.JPG"},
    { src: "bulle1.JPG"},
]

const gallery2 = [
    { src: "P1140053-retouche3.jpg"},
    { src: "P1130910-retouche7.jpg"},
    { src: "P1140005.JPG"},
    { src: "P1140056-retouche.jpg"},
    { src: "P1140070.JPG"},
    { src: "P1140104-retouche4.jpg"}, 
]

function getVideoPath () {
     return new URL(`../../assets/images/competence/photos-videos/portfolio2026-mix.mp4`, import.meta.url).href;
    }

</script>


<style>

.gallery {
  width: 100%;
  overflow: hidden;
  cursor: grab;
}

.main-img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  flex-shrink: 0;
}

.gallery-scroll {
  display: flex;
  gap: 15px;
  overflow-x: scroll;
}

.gallery-scroll img {
  width: 200px;
  height: 260px;
  object-fit: cover;
  flex-shrink: 0;
}

.scroller {
  scrollbar-color: #4b5a66b3 #c4c4c400;
}
</style>