<template>
  <article class='task' :class='{ "task--complete" : complete }'>
    <button class='task__delete-task b-button' @click='deleteTask'>
      <icon class='b-button__icon' name='times' scale='1.5'></icon>
    </button>
    <h2 class='task__progress'>{{ progressText }}</h2>
    <span-input
      tagName='h2'
      className='task__title'
      :value='task.name'
      @change='changeName'></span-input>
    <step-list
      :taskId='task.id'
      :steps='task.steps'></step-list>
  </article>
</template>

<script>
  import StepList from './StepList'
  import SpanInput from './SpanInput'

  export default {
    name: 'task',
    props: ['task'],
    computed: {
      progressText: function () {
        let progressTask = this.$store.getters.getProgressTask(this.task.id)
        return progressTask.all ? progressTask.complete + '/' + progressTask.all : '-/-'
      },
      complete: function () {
        let progressTask = this.$store.getters.getProgressTask(this.task.id)
        return progressTask.all && progressTask.all === progressTask.complete
      }
    },
    methods: {
      changeName (newName) {
        if (!newName) {
          newName = 'Task ' + this.task.id
        }
        this.$store.commit('changeNameTask', { taskId: this.task.id, newName: newName })
      },
      deleteTask () {
        this.$store.commit('deleteTask', this.task.id)
      }
    },
    components: { StepList, SpanInput }
  }
</script>

<style lang='sass'>
  @import '../style/mixins'

  .task
    position: relative
    width: 100%
    margin-top: 1em
    margin-bottom: 1em
    padding: 10px
    border: 1px solid #bbbbbb
    border-radius: 4px
    &--complete
      background-color: #bae5bb
    &__title
      min-height: 40px
      margin-bottom: 0.5em
      word-wrap: break-word
    &__delete-task
      float: right
      margin-left: 10px
      min-width: 45px
    &__progress
      float: right
      @include tablet
        width: 115px
</style>
