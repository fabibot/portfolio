<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import MainContent from './components/MainContent.vue';
</script>

<template>
  <!-- <header>
    <div>
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <MainContent titre="CV Fabiola"/>
  </main>
  <div class="homeButtons">
    <button title="télécharger le cv">Télécharger</button>
  </div>
</template>

<style scoped>
  .homeButtons {
    position: fixed;
    z-index: 2000;
    bottom: 10px;
    right: 10px;
  }
</style>


