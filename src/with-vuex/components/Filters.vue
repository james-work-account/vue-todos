<template>
  <div class="filters">
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.allTodos)}]" @click="setFilter(filters.allTodos)">Show All</button>
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.completedTodos)}]" @click="setFilter(filters.completedTodos)">Show Completed</button>
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.uncompletedTodos)}]" @click="setFilter(filters.uncompletedTodos)">Show Uncompleted</button>
  </div>
</template>

<script>
import { filters } from '@/common/common'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'filters',
  data() {
    return {
      filters
    }
  },
  methods: {
    ...mapActions(['setFilter']),
    ...mapGetters(['getCurrentFilter']),
    checkCurrentFilter(filter) {
      return this.getCurrentFilter() === filter
    }
  }
}
</script>

<style>
  .filters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
    margin-top: 1em;
  }
  .filters .btn {
    padding: 1em
  }
  .btn.active-filter {
    background-color: #888
  }
</style>
