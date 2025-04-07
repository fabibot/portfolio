<template>
    <div class="">
        <!-- <ul class="d-flex justify-content-arround div-info-1 col-6">
            <li> {{ coordonnees.linkedin.nom }}</li>
            <li>{{ coordonnees.git.nom }}</li>
            <li>{{ coordonnees.insta.nom }}</li>
        </ul> -->
        <div class="d-flex flex-column justify-content-around div-info-2 col-6">
            <div>
                <div>{{ coordonnees.dateNaissance }}</div>
                <div>{{ coordonnees.mail }}</div>
                <div>{{ coordonnees.codePostal }}</div>
                <div class="octarine-b">Tel. {{ coordonnees.numero }}</div>
            </div>
        </div>
    </div>
</template>

<style>
    /* .div-info-1 {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
    }
    .div-info-2 {
        grid-row: 2 / 3;
        grid-column: 4 / 5;
    } */
    
</style>

<script>
export default {
  props: {
    coordonnees: Object,
  },
};
</script>

