<template>
    <div class="pt-5">
        <h2 class="octarine-b"> Compétences </h2>
        <div>
            (mettre à jour)
            <div v-for="skill in competence" class="">
                {{ skill.nom }} :<span class="cascadia-sb fond-bleu">{{ skill.niveau }}</span>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  props: {
    competence: Object,
  },
};
</script>