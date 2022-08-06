<template>
  <div class="main-container">
    <div class="item-container" v-for="i in 9" :key="i">
      <span>Titulo filme</span>
      <img src="../../assets/logo.png" width="100" />
      imagem filme First Commit Teste
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}

.item-container {
  display: flex;
  background: #42b983;
  margin: 1%;
  border: 0.2rem solid transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item-container:hover {
  border: 0.2rem solid #2c3e50;
}
</style>
