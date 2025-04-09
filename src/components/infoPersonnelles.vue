<template>
    <div>
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
    
</style>

<script>
export default {
  props: {
    coordonnees: Object,
  },
};
</script>

