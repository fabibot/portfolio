<template>
    <p>{{ description }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  description: {
    type: String,
    required: true,
  },
})

// const bottomDivImage = ref(0);
// let topDivDesc = ref(0);
// const bottomDivNom = ref(0);

// onMounted(() => {
//   const divImage = document.querySelector('.div-image');
//   const divDesc = document.querySelector('.div-desc');
//   if (divImage) {
//     bottomDivImage.value = divImage.getBoundingClientRect().bottom;
//   }

//   window.addEventListener('scroll', () => {
//     topDivDesc.value = divDesc.getBoundingClientRect().top;

//     if(topDivDesc.value < bottomDivImage.value) {
//         divDesc.style.gridColumn = "3/4";
//     } else {
//         divDesc.style.gridColumn = "2/4";
//     }
//   });
// });

</script>