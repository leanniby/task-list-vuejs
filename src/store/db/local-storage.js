export default function (store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  })
}
