<template>
  <div class="home">
    <AddTodo :text="text" :changeText="changeText" :add="add" :reset="reset" />
    <Filters :currentFilter="currentFilter" :setFilter="setFilter" />
    <Todos :todos="getTodos" :handleDelete="handleDelete" :handleCheck="handleCheck" />
  </div>
</template>

<script>
import Todos from '@/without-vuex/components/Todos'
import AddTodo from '@/without-vuex/components/AddTodo'
import Filters from '@/without-vuex/components/Filters'
import { defaultState, filters } from '@/common/common'

const key = 'withoutVuexTodos'

export default {
  name: 'home',
  components: {
    Todos, AddTodo, Filters
  },
  data () {
    return {
      todos: defaultState().todos,
      text: defaultState().currentTodoText,
      currentFilter: filters.allTodos
    }
  },
  methods: {
    // AddTodo
    changeText (e) {
      const text = event.target.value
      this.text = text
    },
    add () {
      if (this.text !== '') {
        this.todos = [...this.todos, {
          id: Date.now(),
          text: this.text,
          checked: false
        }]
        this.text = ''
        document.querySelector('.search input').value = ''
      }
    },
    reset () {
      this.todos = defaultState().todos
    },
    // Filters
    setFilter (filter) {
      this.currentFilter = filter
    },
    // Todos
    handleDelete (todo) {
      this.todos = this.todos.filter(td => td.id !== todo.id)
    },
    handleCheck (todo) {
      this.todos = this.todos.map(td => td.id === todo.id ? { ...td, checked: !td.checked } : td)
    },
    getTodosFromLocalStorage () {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key)
        try {
          value = JSON.parse(value)
          this.todos = value
          return this.todos
        } catch {
          return value
        }
      } else {
        return this.todos
      }
    }
  },
  computed: {
    getTodos () {
      const todos = this.getTodosFromLocalStorage()
      switch (this.currentFilter) {
        case filters.allTodos: return todos
        case filters.completedTodos: return todos.filter(td => td.checked)
        case filters.uncompletedTodos: return todos.filter(td => !td.checked)
        default: return todos
      }
    }
  },
  watch: {
    todos: (val) => {
      if (localStorage.getItem(key) !== JSON.stringify(val)) {
        localStorage.setItem(key, JSON.stringify(val))
      }
    }
  }
}
</script>

<style>

</style>
