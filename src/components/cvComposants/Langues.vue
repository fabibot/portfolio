<template>
    <div class="ps-5 py-3">
        <h2 class="octarine-b">Langues</h2>
        <div v-for="langue in langues" class="text-nowrap">
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