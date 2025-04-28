<template>
    <div class="card-projet p-4">
        <h2 class="octarine-b">{{ titre }}</h2>
        <p class="cascadia-el"> {{ description }}</p>
        <p class="cascadia-el">{{ date }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
    titre: String,
    description: String,
    date: String
    })
</script>


<style scoped>
    .card-projet {
        width: 460px;
        height: min-content;
        transition: box-shadow 0.7s ease-in-out;
        box-shadow: inset 70px 0 var(--color-1);
    }

    @media (min-width: 520px) {
        .card-projet:hover  {
            box-shadow: inset 460px 0 var(--color-1);
    }
    }

    @media (max-width: 600px) {
        .card-projet {
            width: auto;
        }
    }

    @media (max-width: 900px) {
        .card-projet {
            margin: 0 !important;
        }
    }
</style>