<template>
  <div class="todos">
      <Todo v-for="todo in todos()" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from '@/with-vuex/components/Todo'
import { mapGetters } from 'vuex'

export default {
  name: 'Todos',
  components: {
    Todo
  },
  methods: {
    ...mapGetters({
      todos: 'getTodos'
    })
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  margin-top: 1em;
  grid-row-gap: 0.5em;
}
</style>
