<template>
  <form class="search" @submit.prevent="submitTodo">
    <input type="text" placeholder="Type to add a Todo..." @input="changeText" />
    <button class="btn" type="submit">Add Todo</button>
    <button class="btn" type="button" @click="reset">Reset Data</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'addTodo',
  methods: {
    ...mapGetters({
      text: 'getText'
    }),
    ...mapActions({
      add: 'addTodo',
      changeText: 'changeTodoText',
      reset: 'resetTodos'
    }),
    submitTodo () {
      this.add()
      document.querySelector('.search input').value = ''
    }
  }
}
</script>

<style>
  .search {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-column-gap: 1em;
    margin-top: 15px
  }
  .search > input[type="text"] {
    border: 2px solid #ccc;
    padding: 1em;
  }
  @media(max-width: 749px) {
    .search {
      grid-template-columns: 1fr;
      grid-row-gap: 0.5em;
    }
    .search .btn {
      padding: 1em;
    }
  }
</style>
