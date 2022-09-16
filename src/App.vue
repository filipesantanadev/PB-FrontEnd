<template>
  <div class="content">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/menu/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  margin: 0;
  background-image: url('https://images-ext-2.discordapp.net/external/ZJeX4CqaZmlaqg4UoecUukArqAJulRzRYBvoMin5OQc/https/cdn.rockinrio.com/wp-content/uploads/2021/08/microsoftteams-image-2.png?width=1191&height=670');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
}
</style>
