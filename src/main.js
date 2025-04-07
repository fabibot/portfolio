import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log("coucou")

import { ref, onMounted } from 'vue'

const bottomDivImage = ref(0);
let topDivExperience = ref(0);
const bottomDivNom = ref(0);

addEventListener("DOMContentLoaded", (event) => {
  const divExperience = document.querySelector('.div-experience');
  const column2 = document.querySelector('.column-3');
  console.log(divExperience);
//   if (divImage) {
//     bottomDivImage.value = divImage.getBoundingClientRect().top;
//   }

  window.addEventListener('scroll', () => {
    topDivExperience.value = divExperience.getBoundingClientRect().top;

    if(topDivExperience.value < 5) {
        console.log("ererer")
    } else {
    }
  });
});
