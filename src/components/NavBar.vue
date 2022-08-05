<template>
  <nav class="menu">
    <div class="menu-item">
      <img src="../assets/logo.png">
      <router-link to="/">Home</router-link>
    </div>
    
    <div class="menu-item">
      <img src="../assets/logo.png">
      <router-link to="/manager">Manager</router-link>
    </div>
    
    <div class="menu-item">
      <img src="../assets/logo.png">
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav a{
font-weight: bold;
text-decoration: none;
font-size: 20px;
color: white;
margin-left: 4px;
}

.menu {
  background-color: #2c3e50;
}

.menu img{
  width: 30px;
  margin-left: 16px;
}

.menu-item{
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 6px;
  border-bottom: 0.1rem solid #2c3e50;
}

.menu-item:hover {
  border-bottom: 0.1rem solid #42b983;
}
</style>
