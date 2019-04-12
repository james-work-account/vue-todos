<template>
  <div class="home">
    <AddTodo />
    <Filters />
    <Todos />
  </div>
</template>

<script>
import Todos from '@/with-vuex/components/Todos'
import AddTodo from '@/with-vuex/components/AddTodo'
import Filters from '@/with-vuex/components/Filters'

export default {
  name: 'home',
  components: {
    Todos, AddTodo, Filters
  }
}
</script>
