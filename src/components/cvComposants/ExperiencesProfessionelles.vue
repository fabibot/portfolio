<template>
    <div class="experience fond-blanc p-4">
        <div class="fond-jaune"></div>
        <h2 class="octarine-b">Expériences professionnelles</h2>
        <div>
            <div v-for="exp in experience" class="row my-4">
                <div class="bold col-4 text-end cascadia-sb">{{ exp.duree }}</div>
                <div class="col-8 text-start">{{ exp.description }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped >
    .experience {
        width: 610px;
        z-index: 2;
        background: linear-gradient(to right, var(--color-1) 0px 100px, white 100px 100%);
        margin: 50px;
    }

    /* .fond-jaune {
        position: absolute;
        z-index: -1;
        width: 100px;
        height: 100%;
    } */
</style>

<script>
export default {
  props: {
    experience: Object,
  },
};
</script>