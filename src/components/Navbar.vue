<template>
  <div id="nav"><router-link to="/">Home</router-link></div>
</template>

<style scoped lang="scss">
#nav {
  padding: 15px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>