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
  <div class="reseaux-btn">
    <div class="logo insta mb-4"></div>
    <div class="logo github my-4"></div>
    <div class="logo linkedin my-4"></div>
    <div class="logo navette my-4 fond-jaune"></div>
  </div>
  <div class="home-btn">
    <button title="télécharger le cv" class="telecharger"></button>
  </div>
</template>

<style scoped>
  .home-btn {
    position: fixed;
    z-index: 2000;
    bottom: 30px;
    right: 30px;
  }
  .reseaux-btn {
    position: fixed;
    z-index: 2000;
    top: 20px;
    right: 30px;
  }

  button.telecharger {
    background-image: url(./assets/logos/telecharger.png);
    background-size: contain;
    height: 70px;
    width: 70px;
    background-color: transparent;
    border: none;
  }
  .logo.navette:hover {
    box-shadow: 0px 0px 0px 14px var(--color-1);
  }
</style>


