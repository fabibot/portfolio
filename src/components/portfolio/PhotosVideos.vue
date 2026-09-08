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
        <div class="mx-5">
          <p class="cascadia-el">ecrire le texte </p>
        </div>

    <div class="mt-5">

      <h3 class="octarine-b">Homo Bulla</h3>
      <div class="d-flex align-items-center">
        <div class="gallery"  @mouseenter="startScroll" @mouseleave="stopScroll">
            <div class="gallery-track" :style="{ transform: `translateX(-${scroll}px)` }">
              <img
                v-for="(image, index) in gallery"
                :key="index"
                :src="getImagePath(image.src)"
                  :alt="image.alt || ''"
              />
            </div>
          </div>
      </div>
    </div>

    </div>


</template>

<script setup>
import { goRouterBack } from '../tools/basic-tools';
import { ref } from 'vue'


function getImagePath (filename) {
     return new URL(`../../assets/images/competence/photos-videos/${filename}`, import.meta.url).href;
    }

const scroll = ref(0)
let animationFrame
let lastTime = null

const speed = 70 // pixels par seconde

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp

  const delta = timestamp - lastTime
  lastTime = timestamp

  scroll.value += speed * delta / 1000

  animationFrame = requestAnimationFrame(animate)
}

function startScroll() {
  if (!animationFrame) {
    lastTime = null
    animationFrame = requestAnimationFrame(animate)
  }
}

function stopScroll() {
  cancelAnimationFrame(animationFrame)
  animationFrame = null
  lastTime = null
}

const gallery = [
    { src: "diplome1.JPG"},
    { src: "diplome2.JPG"},
    { src: "bulle2.JPG"}, 
    { src: "diplome3.JPG"},
    { src: "diplome4.JPG"},
    { src: "bulle3.JPG"},
    { src: "bulle1.JPG"},
    { src: "bulle4.JPG"},
    { src: "bulle5.JPG"},
]

</script>


<style>

.gallery {
  width: 100%;
  overflow: hidden;
  cursor: grab;
}

.gallery-track {
  display: flex;
  width: max-content;
  gap: 20px;
}

.gallery-track img {
  width: 260px;
  height: 320px;
  object-fit: cover;
  flex-shrink: 0;
}

</style>