<template>
  <div :class="['todo', { 'checked': todo.checked }]" @click="handleCheck(todo)">
    <div>{{ todo.text }}</div>
    <i class="far fa-trash-alt" @click="handleDelete(todo)"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'todo',
  props: ['todo'],
  methods: {
    ...mapActions({
      handleDelete: 'deleteTodo',
      handleCheck: 'toggleChecked'
    })
  }
}
</script>

<style>
.todo {
  border: 3px solid #000;
  padding: 0.75em;
  display: grid;
  grid-template-columns: 9fr 1fr;
  justify-items: center;
  align-items: center;
  word-break: break-all;
}
.todo i {
  text-align: right;
  cursor: pointer;
  font-size: 1.5em;
}
.checked div {
    position: relative;
}
.checked div:after {
  border-bottom: 0.125em solid #000;
  content: "";
  left: 0;
  margin-top: calc(0.125em / 4 * -1);
  position: absolute;
  right: 0;
  top: 50%;
  cursor: text;
}
</style>
