<template>
  <li class='step'>
    <button class='step__delete b-button'
            @click='deleteStep'>
      <icon name='trash-o' scale='1.5'></icon>
    </button>
    <div class='step__progress'
         @click='upProgress(step.id)'>
      <span class='step__progress-label'
            :class='"step__progress--"+step.progress'>{{ progressText }}</span>
    </div>
    <span-input
      tagName='h3'
      className='step__name'
      :value='step.name'
      @change='changeName'></span-input>
  </li>
</template>

<script>
  import { PROGRESS_STEP } from '../store/const'
  import SpanInput from './SpanInput'

  export default {
    name: 'step',
    props: [ 'taskId', 'step' ],
    computed: {
      progressText () {
        return PROGRESS_STEP[this.step.progress]
      }
    },
    methods: {
      changeName (newName) {
        this.$store.commit('changeNameStep', { taskId: this.taskId, stepId: this.step.id, newName: newName })
      },
      upProgress () {
        this.$store.commit('upProgressStep', { taskId: this.taskId, stepId: this.step.id })
      },
      deleteStep () {
        this.$store.commit('deleteStep', { taskId: this.taskId, stepId: this.step.id })
      }
    },
    components: { SpanInput }
  }
</script>

<style lang='sass'>
  @import ../style/mixins

  .step
    position: relative
    @include clearfix
    margin-bottom: 1em
    &__name
      margin-left: 1em
      min-height: 30px
      padding-top: 0.3em
      word-wrap: break-word
    &__progress
      float: right
      margin-top: 0.5em
      @include tablet
        width: 150px
        text-align: center
    &__progress-label
      padding: 0 1em
      color: white
      user-select: none
      border-radius: 0.5em
    &__progress--0
      background: #b94a48
    &__progress--1
      background: #f89406
    &__progress--2
      background: #468847
    &__delete
      float: right
      margin-left: 10px
</style>
