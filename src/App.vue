<template>
  <div id='app'>
    <task-list />
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: 'app',
  components: { TaskList }
}
</script>

<style lang='sass'>
@import './style/main'
</style>
