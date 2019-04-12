<template>
  <div id="app">
    <div id="nav">
      <h1>Vue App</h1>
      <router-link to="/">Without Vuex</router-link> |
      <router-link to="/vuex">With Vuex</router-link>
    </div>
    <router-view/>
    <GitHubIcon />
  </div>
</template>

<script>
import GitHubIcon from '@/with-vuex/components/GitHubIcon'

export default {
  components: {
    GitHubIcon
  }
}
</script>


<style>
  * {
    font-size: 18px
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 750px;
    margin: 25px auto 0;
  }
  #nav {
    padding: 30px;
    margin: 25px auto 0;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .btn {
    border: 3px solid #000;
    color: #fff;
    background: #000;
    font-weight: bold;
    padding: 1rem;
    text-align: center
  }
  .btn:active {
    background-color: #888
  }

  @media(max-width: 749px) {
    * {
      font-size: 14px;
    }
    .App {
      width: 100%;
      margin: 0
    }
  }
</style>
