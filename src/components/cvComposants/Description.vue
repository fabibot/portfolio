<template>
    <p>{{ description }}</p>
</template>

<script setup>

defineProps({
  description: {
    type: String,
    required: true,
  },
})

</script>