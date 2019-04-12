export const defaultState = () => {
  return {
    todos: [
      {
        id: 1,
        text: 'Todo 1',
        checked: false
      },
      {
        id: 2,
        text: 'Todo 2',
        checked: true
      },
      {
        id: 3,
        text: 'Todo 3',
        checked: false
      }
    ],
    currentTodoText: '',
    currentFilter: filters.allTodos
  }
}

export const filters = {
  allTodos: 0,
  completedTodos: 1,
  uncompletedTodos: 2
}
