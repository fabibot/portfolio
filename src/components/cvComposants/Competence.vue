<template>
    <div class="p-4">
        <h2 class="octarine-b"> Compétences </h2>
        <div>
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