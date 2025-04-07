<template>
    <div>
        <h2 class="octarine-b">Langues</h2>
        <div v-for="langue in langues">
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