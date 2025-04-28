<template>
    <div class="pt-3">
        <h2 class="octarine-b"> Compétences </h2>
        <div class="w-competence">
            <div v-for="skill in competence" class="line-competence d-flex justify-content-between">
                <div class="">{{ skill.nom }}</div>
                <div class="d-flex align-items-center my-1" v-if="skill.niveau > 0">
                    <div v-for="(count, index) in 5" :key="index" :class="['case-back','d-flex', 'align-items-center', { 'fond-bleu': index < skill.niveau }]">
                        <div class="case m-1"></div>
                    </div>
                </div>
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

<style>
    .w-competence {
        width: 365px;
    }
    .case-back {
        z-index: 1;
    }
    .case {
        border: solid 1px black;
        width : 15px;
        height: 15px;
        z-index: 3;
    }

    @media (max-width: 480px) {
        .line-competence {
            flex-direction: column;
            margin-bottom: 15px;
        }
    }
</style>