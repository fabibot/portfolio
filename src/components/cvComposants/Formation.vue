<template>
    <div class="formation py-3">
        <h2 class="octarine-b"> Formation </h2>
        <div>
            <p v-for="diplome in formation" class="my-3">
                <span class="cascadia-sb fond-bleu p-1">{{ diplome.annee }}</span> - {{ diplome.nom }}
            </p> 
        </div>
    </div>
</template>

<script>
export default {
  props: {
    formation: Object,
  },
};

</script>

<style>
    .formation li {
        margin: 20px 0px
    }
    
</style>
