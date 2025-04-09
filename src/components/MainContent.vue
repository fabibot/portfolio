<!-- vue qu'on a la place, doubler le contenu pour les deux expériences en dev
 laisser fixe les informations les plus iportant, donc l'entête avec info personnelles et description
 fixer et non stycky pour la partie qui bouge pas pour qu'elle bouge VRAIMENT PAS -->

<template>
    <div class="main-grid">
        <div class="column-1">
            <div class="fond-jaune div-prenom sticky-top">
                <div>
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
            </div>
            <div class="div-competence">
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
        
    </div>
   
</template>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 5% 40% 1fr;
        column-gap: 15px;
    }
    .column-2 {
        display: grid;
        grid-template-columns: 138px 1fr;
        grid-template-rows: 145px 101px 150px 250px;
        column-gap: 25px;  
        position: sticky;
        top: 0;  
        height: min-content;    
    }
    .column-2 div {
        /* position: fixed; */
        /* top:0 */
    }
    .column-3 {
        /* padding: 30px; */
    }
    .div-prenom {
        grid-row: 1 / 4;
        width: 30px;
        height: 530px;
        padding: 10px;
        background: linear-gradient(to right, var(--color-1) 0px 30px, white 30px 100%);

    }
    .div-prenom > div {
        transform: rotate(90deg);
    }
    .div-prenom  h1 {
        position: absolute;
        top : -50px;
        left: 22px;
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
    /* .div-formation {
        grid-row: 4 / 5;
        grid-column: 2 / 3;
    }*/
    .div-competence {
        grid-row : 4 / 5;
        grid-column: 1 / 3;
    }
    /*
    .div-langues {
        display: flex;
        grid-row: 5 / 6;
        grid-column: 1 / 2;
    }
    .div-hobbies {
        grid-row: 7 / 8;
        grid-column: 1 / 3;
    } */
</style>

<script setup>
import InfoPersonnelles from './infoPersonnelles.vue';
import Formation from './cvComposants/Formation.vue';
import ExperiencesProfessionelles from './cvComposants/ExperiencesProfessionelles.vue';
import Description from './cvComposants/Description.vue';
import Competence from './cvComposants/Competence.vue';
import Langues from './cvComposants/Langues.vue';
import Hobbies from './cvComposants/Hobbbies.vue';

defineProps({
  titre: {
    type: String,
    required: true,
  },
})

const info = {
  nom: 'Bellon',
  prenom: 'Fabiola',
  coordonnees: {
    numero: '07 71 02 90 81',
    dateNaissance: '27/12/1999',
    mail: 'fabiolabellon.jimenez@gmail.com',
    codePostal : "42 000 Saint-Etienne",
    insta : { nom : "fabiola_crea", lien : "www" },
    linkedin: { nom : "Fabiola Bellon", lien : "www" },
    git: { nom : "fabibot", lien : "www" },
  },
  description: `Après un stage de quatre mois chez Diagram Informatique, axé sur l'intégration de maquettes pour le web, je suis à la recherche d'un premier emploi en tant que développeuse front-end. Mon parcours aussi atypique qu'enrichissant, mêlant design, graphisme et informatique, montre à quel point je ne me lasse jamais d'apprendre.`,
  formation : [
        {annee: '2024', nom: 'The Odin Project, Full Stack Javascript'},
        {annee: '2023', nom: 'Harvard University CS50x, Introduction to Computer Science'},
        {annee: '2023', nom: 'DNSEP a l’Ecole Supérieur d’Art et de Design de Saint-Etienne, mention objet'},
        {annee: '2021', nom: 'DNA à l’école supérieure d’art et de design de SaintÉtienne, option objet et numérique'},
    ],
  langues : [
    { langue: 'Espagnol', niveau : "Bilingue" },
    { langue: 'Anglais', niveau : "Professionel"}
  ],
  competance : [
    { nom: "Vue.js", niveau: 4 },
    { nom: "Bootstrap", niveau: 3 },
    { nom: "Twig/Symfony", niveau: 2 },
    { nom: "Git", niveau: 3 },
    { nom: "HTML, CSS, JavaScript", niveau: 4 },
    { nom: "+ Initiations en Python, Flask, SQL et C++", niveau: 0 }
],
experience : [
    {duree : "Octobre 2024 à Mars 2025, Illiwap, Saint-Etienne", description: "(A corriger) Travail sur la migration, notament du front. Gestion des tiquets et des remonté des clients. Découvert de flutter et du back. "},
    {duree : " mai-aôut 2024 Diagram Informatique, Saint-Etienne", description: "Création d'un site internet avec Vue.js. Intégration de maquettes avec Symfony, Twig et Bootstrap."},
    {duree : " Janvier 2022 And Jacob, Mexique", description: "Conception de produits autour des arts de la table. Élaboration de dessins, de rendu 3D et de plans sur Rhinocéros et Keyshot."},
    {duree : " Octobre 2020 Distorsion, Auvergne Rhône-Alpes", description: "Conception d’une identité graphique pour une recyclerie. Conception d’un logo et d’illustrations à l’aide du logiciel Illustrator."},
],
hobbies : [
    { nom: "Escalade", description: " pratique du bloc et de la voie" },
    { nom: "Couture", description: " Confection de vêtements et d’accessoire" }
]

}
</script>
