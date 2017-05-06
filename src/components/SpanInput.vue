<!--<template>-->
  <!--<div>-->
    <!--<h2 :class='className' v-if='flag' @dblclick='startEditElement'>-->
      <!--{{ text }}-->
    <!--</h2>-->
    <!--<input ref='input' v-else :class='className' @change='endEditElement' @blur='cancelEditElement' v-model='text'>-->
  <!--</div>-->
<!--</template>-->

<script>
  import Vue from 'vue'

  export default {
    name: 'span-input',
    data: function () {
      return {
        flag: true
      }
    },
    props: ['tagName', 'className', 'value'],
    computed: {
      text: function () {
        return this.value
      }
    },
    methods: {
      startEditElement () {
        let self = this
        this.flag = false
        Vue.nextTick(() => self.$refs.input.focus())
      },
      endEditElement (e) {
        this.flag = true
        this.$emit('change', e.target.value)
      },
      cancelEditElement () {
        this.flag = true
      }
    },
    render: function (createElement) {
      var self = this
      return (this.flag)
      ? createElement(this.tagName, {
        'class': this.className,
        on: {
          dblclick: this.startEditElement
        }
      }, this.text)
      : createElement('input', {
        'class': this.className,
        domProps: {
          value: self.value
        },
        on: {
          change: this.endEditElement,
          blur: this.cancelEditElement
        },
        ref: 'input'
      })
    }
  }
</script>

<style lang='sass'>
</style>
