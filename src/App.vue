<template>
  <div class="content">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  margin: 0;
  background: #e6e6e6;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
}
</style>
