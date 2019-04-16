<template>
  <div id="app">
    <div id="body">
      <div id="nav">
        <h1>Vue App</h1>
        <router-link to="/">Without Vuex</router-link> |
        <router-link to="/vuex">With Vuex</router-link>
      </div>
      <router-view/>
    </div>
    <div id="footer">
      <GitHubIcon />
    </div>
  </div>
</template>

<script>
import GitHubIcon from '@/common/components/GitHubIcon'

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
    margin: 0 auto 0;
  }

  #nav {
    padding: 30px;
    margin: 0 auto 0;
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

  @media(max-width: 854px) {
    #body {
      padding-bottom: calc(18px + 18px + 10px + 8px) /* 2em footer font size + footer padding + 8px body padding*/
    }
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
