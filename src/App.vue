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
    <div class="logo insta"></div>
    <div class="logo github"></div>
    <div class="logo linkedin mb-4"></div>
    <button title="télécharger le cv" class="telecharger"></button>
  </div>
</template>

<style scoped>
  .homeButtons {
    position: fixed;
    z-index: 2000;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button.telecharger {
    background-image: url(./assets/images/telecharger.png);
    background-size: contain;
    height: 70px;
    width: 70px;
    background-color: transparent;
    border: none;
  }
</style>


