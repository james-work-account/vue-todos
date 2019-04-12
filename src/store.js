import Vue from 'vue'
import Vuex from 'vuex'
import { defaultState, filters } from '@/common/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
    deleteTodo (state, todo) {
      state.todos = state.todos.filter(td => td.id !== todo.id)
    },
    toggleChecked (state, todo) {
      state.todos = state.todos.map(td => td.id === todo.id ? { ...td, checked: !td.checked } : td)
    },
    changeTodoText (state, text) {
      state.currentTodoText = text
    },
    addTodo (state) {
      state.todos = [...state.todos, {
        id: Date.now(),
        text: state.currentTodoText,
        checked: false
      }]
    },
    resetTodos (state) {
      Object.assign(state, {
        todos: defaultState().todos,
        currentTodoText: state.currentTodoText
      })
    },
    setFilter (state, filter) {
      state.currentFilter = filter
    }
  },
  actions: {
    deleteTodo (context, todo) {
      context.commit('deleteTodo', todo)
    },
    toggleChecked (context, todo) {
      context.commit('toggleChecked', todo)
    },
    changeTodoText (context, event) {
      const text = event.target.value
      context.commit('changeTodoText', text)
    },
    addTodo (context) {
      if (this.state.currentTodoText !== '') {
        context.commit('addTodo')
        context.commit('changeTodoText', '')
      }
    },
    resetTodos (context) {
      context.commit('resetTodos')
    },
    setFilter (context, filter) {
      context.commit('setFilter', filter)
    }
  },
  getters: {
    getTodos: (state) => {
      const todos = state.todos
      switch (state.currentFilter) {
        case filters.allTodos: return todos
        case filters.completedTodos: return todos.filter(td => td.checked)
        case filters.uncompletedTodos: return todos.filter(td => !td.checked)
        default: return todos
      }
    },
    getText: (state) => {
      return state.currentTodoText
    },
    getCurrentFilter: (state) => {
      return state.currentFilter
    }
  }
})
