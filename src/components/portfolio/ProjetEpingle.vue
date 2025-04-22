<template>
    <div class="d-flex d-flex justify-content-center align-items-end">
        <div class="p-5 image-projet-epingle background-gribouilli">
            <img :src="getImagePath(projetEpingle.image)" alt="" class="img-projet static-content">
        </div>
        <div class="mon-pref">
        </div>
        <CardProjet :titre="projetEpingle.titre" :description="projetEpingle.description" class="ms-5"></CardProjet>
    </div>
    <!-- todo 
     - revoir le display pour faire plutôt une grid et placer correctement la fleche mon pref 
     [IDEE DE TYPE D'ANIMATION]
     - grand puis petit (coutour)
     - rotate un peu à gauche puis à droite, pas beaucoup mais vif avec petit pause genre "tac tac   .... tac tac ..... tac tac"
     -->
     <!-- A SUIVRE : 
     - travailler le fond ? avec texture ? (hachure, pointillé, etc )
     - vrai choix des projets 
     -->

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
        bottom: 50px;
        animation: micro-orbite 15s linear infinite;
        display: inline-block;

    }
    .static-content {
        animation: micro-orbite-reverse 15s linear infinite;

    }
    @keyframes micro-orbite {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }

    @keyframes micro-orbite-reverse {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
    }
     .background-gribouilli {
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed.png);
        background-size: contain;
     }

    .mon-pref {
        background-image: url(../../assets/images/gribouillis/gribouilli-MonPref.png);
        background-size: contain; 
        width: 215px;
        height: 213px;
        position: absolute;
        top: 144px;
    }
</style>