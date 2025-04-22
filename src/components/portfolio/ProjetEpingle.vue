<template>
    <div class="d-flex d-flex justify-content-center align-items-end">
        <div class="m-5 image-projet-epingle">
            <img :src="getImagePath(projetEpingle.image)" alt="" class="img-projet">
        </div>
        <CardProjet :titre="projetEpingle.titre" :description="projetEpingle.description" class="ms-5"></CardProjet>
    </div>

</template>

<script setup>
import CardProjet from './CardProjet.vue';

    const props = defineProps({
        projetEpingle: Object
    })

    function getImagePath (filename) {
     return new URL(`../../assets/images/projets/${filename}`, import.meta.url).href;
    }
</script>

<style scoped>
    .image-projet-epingle {
        position: relative;
        bottom: 78px;
    }
</style>