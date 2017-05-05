<template>
  <div class='task-list wrapper'>
    <header class='task-list__header'>
      <h1>Task List</h1>
    </header>
    <task
      v-for='task in tasks'
      :task='task'
      :key='task.id' />
    <button class='task-list__add-task b-button' @click='newTask'>
      <icon class='b-button__icon' name='plus-circle' scale='1.5'></icon><span> New task</span>
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Task from './Task'

  export default {
    name: 'task-list',
    computed: {
      ...mapState({
        tasks: 'tasks'
      })
    },
    methods: {
      newTask () {
        this.$store.commit('newTask')
      }
    },
    components: { Task }
  }
</script>

<style lang='sass'>
  .task-list
    &__header
      margin-bottom: 1em
    &__add-task
      margin-bottom: 10px
</style>
