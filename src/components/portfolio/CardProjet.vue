<template>
    <div class="card-projet p-4">
        <h2 class="octarine-b">{{ titre }}</h2>
        <p class="cascadia-el">{{ description }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
    titre: String,
    description: String
    })
</script>


<style scoped>
    .card-projet {
        width: 380px;
        height: min-content;
        transition: box-shadow 0.7s ease-in-out;
        box-shadow: inset 70px 0 var(--color-1);
    }

    .card-projet:hover  {
        box-shadow: inset 380px 0 var(--color-1);

    }
</style>