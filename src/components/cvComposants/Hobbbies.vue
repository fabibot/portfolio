<template>
    <div class="ps-5 py-3">
        <h2 class="octarine-b">Hobbies</h2>
        <div v-for="hobbie in hobbies">
            <span class="">{{ hobbie.nom }}</span> : {{ hobbie.description }}</div>
    </div>
</template>

<script>
export default {
  props: {
    hobbies: Object,
  },
};
</script>

<style scoped>
    .ps-5 {
        margin-left : 254px;
    }
</style>