<script setup lang="ts">
import { goRouterBack } from '../tools/basic-tools';

</script>

<template>
    <div class="container-fluid">
        <div>
            <h1>
                <a @click="goRouterBack" class="">
                    <span class="icon-btn logo retour medium"></span>
                </a>
                Explorez les compétences
            </h1>
        </div>
    </div>

    <div class="container-fluid">
        <div class="m-3 m-md-5">
            <div class="row p-3 p-md-5 m-2 m-md-3">
                <RouterLink to="/projets" class="col caseCompetence d-flex flex-column justify-content-end labo-web">
                    <h2 class="octarine-b">Laboratoire Web</h2>
                    <p class="cascadia-el">HTML, CSS, JavaScript et Flutter </p>
                </RouterLink>
                <RouterLink to="/image-numerique" class="col caseCompetence d-flex flex-column justify-content-end img-numerique">
                    <h2 class="octarine-b">Image Numérique</h2>
                    <p class="cascadia-el">Figma, Photoshop et illustrations</p>
                </RouterLink>
                <RouterLink to="/" class="col caseCompetence d-flex flex-column justify-content-end prise-vue">
                    <h2 class="octarine-b">Prise de vue réelle</h2>
                    <p class="cascadia-el">Photographies et vidéos</p>
                </RouterLink>
            </div>
        </div>
    </div>

</template>


<style>
    .caseCompetence {
        margin: 15px;
        padding: 15px;
        min-height: 350px;
        min-width: 275px;
        background-repeat: no-repeat;
        transition: all 0.25s ease-in-out;
        background-size: cover;
        background-position: center;
        box-shadow: inset -1000px 0px 0px 0px rgba(0, 0, 0, 0.30);
    }

    a {
        color: #f7f4f4;
        text-decoration: unset;
    }

    .caseCompetence:hover {
        transform: scale(1.05);
    }

    .img-numerique {
        background-image: url(../../assets/images/competence/guitare_electrique.png);
        background-color: rgb(237, 177, 66);
    }

    .labo-web {
        background-image: url(../../assets/images/competence/screendev.jpg);

    }

    .prise-vue {
        background-image: url(../../assets/images/competence/maquette-diplome.JPG);
    }
</style>