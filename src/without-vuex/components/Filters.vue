<template>
  <div class="filters">
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.allTodos)}]" @click="setFilter(filters.allTodos)">Show All</button>
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.completedTodos)}]" @click="setFilter(filters.completedTodos)">Show Completed</button>
    <button :class="['btn', {'active-filter': checkCurrentFilter(filters.uncompletedTodos)}]" @click="setFilter(filters.uncompletedTodos)">Show Uncompleted</button>
  </div>
</template>

<script>
import { filters } from '@/common/common'

export default {
  name: 'filters',
  props: ['setFilter', 'currentFilter'],
  data() {
    return {
      filters
    }
  },
  methods: {
    checkCurrentFilter(filter) {
      return this.currentFilter === filter
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
