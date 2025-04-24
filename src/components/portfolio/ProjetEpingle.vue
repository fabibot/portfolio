<template>
    <div class="d-flex d-flex justify-content-center align-items-end">
        <div class="d-flex  div-images">
            <div class="p-5 image-projet-epingle background-gribouilli">
                <img :src="getImagePath(projetEpingle.image)" alt="" class="img-projet static-content">
            </div>
            <div class="mon-pref-bis"></div>
        </div>
        <div class="d-block">
            <div class="mon-pref"></div>
            <CardProjet :titre="projetEpingle.titre" :description="projetEpingle.description" class="ms-5"></CardProjet>
        </div>
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
        bottom: 50px;
        animation: micro-orbite 15s linear infinite;
        display: inline-block;

    }
    .static-content {
        animation: micro-orbite-reverse 15s linear infinite;

    }

     .background-gribouilli {
        background-image: url(../../assets/images/gribouillis/gribouilli-borderDashed.png);
        background-size: contain;
     }

    .mon-pref, .mon-pref-bis {
        background-image: url(../../assets/images/gribouillis/gribouilli-MonPref.png);
        background-size: contain; 
        width: 215px;
        height: 213px;
    }

    .mon-pref-bis {
        display: none;
        background-repeat: no-repeat;
    }

    @media (max-width: 900px) {
        .projet-groupe > div {
            display: block !important;
        }
        .mon-pref {
            display: none;
        }
        .mon-pref-bis {
            display: block;
        }
        .div-images {
            justify-content: flex-end;
        }
        .image-projet-epingle {
            position: inherit;
        }
    }

    @media (max-width: 570px) {
    
        .mon-pref-bis {
            display: none;
        }
    }
</style>