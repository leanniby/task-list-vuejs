<template>
  <ul class='step-list'>
    <step
      v-for='step in steps'
      :taskId='taskId'
      :step='step'
      :key='step.id' />
    <button class='step-list__add-step b-button' @click='newStep'>
      <icon class='b-button__icon' name='plus-circle' scale='1.5'></icon><span> New step</span>
    </button>
  </ul>
</template>

<script>
  import Step from './Step'

  export default {
    name: 'step-list',
    props: [ 'taskId', 'steps' ],
    methods: {
      newStep () {
        this.$store.commit('newStep', this.taskId)
      }
    },
    components: { Step }
  }
</script>

<style lang='sass'>
@import ../style/mixins

.step-list
  &__step
    position: relative
    @include clearfix
    margin-bottom: 1em
</style>
