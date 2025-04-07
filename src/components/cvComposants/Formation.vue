<template>
    <div class="formation p-4">
        <h2 class="octarine-b"> Formation </h2>
        <div>
            <div v-for="diplome in formation" class="my-3">
                <span class="cascadia-sb fond-bleu">{{ diplome.annee }}</span> - {{ diplome.nom }}
            </div> 
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
    .formation {
        width: 390px;
    }
    .formation li {
        margin: 20px 0px
    }
    
</style>
