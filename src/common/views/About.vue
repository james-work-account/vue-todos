<template>
  <div>
    <h1>About</h1>
    <p>A Vue app built with Vuex, vue-router and localStorage</p>
    <ul>
      <li>
        <a href='/'>/</a> : Todos app built without Vuex - <a href="#">Tutorial here</a>
      </li>
      <li>
        <a href='/vuex'>/vuex</a> : Todos app built with Vuex - <a href="#">Tutorial here</a>
      </li>
    </ul>
    <p>Uses localStorage to cache data between page refreshes</p>
    <p>Click the GitHub icon to view this code on GitHub</p>
    <a href="https://vuejs.org/v2/guide/" target="_blank">More on Vue</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  p {
    margin: 10px
  }
  a {
    color: var(--greenLinkColour);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
</style>
