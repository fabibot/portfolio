<template>
    <div class="ps-4 pt-3 pb-5 fond-coupe">
        <h2 class="octarine-b">Langues</h2>
        <div v-for="langue in langues" class="text-nowrap ms-4">
            <span class="cascadia-sb">{{ langue.langue }}</span> : {{ langue.niveau }}</div>
    </div>
</template>

<script>
export default {
  props: {
    langues: Object,
  },
};
</script>

<style>
    .fond-coupe {
        background: linear-gradient(to right, var(--color-1) 0px 100px, white 100px 100%);
    }
</style>