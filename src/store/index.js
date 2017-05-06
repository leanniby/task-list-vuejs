import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import LocalStorage from './db/local-storage'
import { PROGRESS_STEP } from './const'
import { maxID, getByID, deleteByID } from '../libs/arrayID'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state: State,
  getters: {
    tasks: state => {
      return state.tasks
    },
    getProgressTask: state => taskId => {
      let task = getByID(state.tasks, taskId)
      if (task === undefined) {
        return
      }
      let steps = task.steps
      return {
        all: steps.length,
        complete: steps.filter(e => e.progress === (PROGRESS_STEP.length - 1)).length
      }
    }
  },
  mutations: {
    newTask: (state) => {
      let newId = maxID(state.tasks) + 1
      let task = {
        id: newId,
        name: 'Task ' + (newId + 1),
        steps: []
      }
      state.tasks.push(task)
    },
    deleteTask: (state, taskId) => {
      deleteByID(state.tasks, taskId)
    },
    changeNameTask: (state, {taskId, newName}) => {
      let task = getByID(state.tasks, taskId)
      task.name = newName
    },
    newStep: (state, taskId) => {
      let task = getByID(state.tasks, taskId)
      let newId = maxID(task.steps) + 1
      let step = {
        id: newId,
        name: 'Step ' + (newId + 1),
        progress: 0
      }
      task.steps.push(step)
    },
    deleteStep: (state, {taskId, stepId}) => {
      let task = getByID(state.tasks, taskId)
      deleteByID(task.steps, stepId)
    },
    changeNameStep: (state, {taskId, stepId, newName}) => {
      let task = getByID(state.tasks, taskId)
      let step = getByID(task.steps, stepId)
      step.name = newName
    },
    upProgressStep: (state, {taskId, stepId}) => {
      let task = getByID(state.tasks, taskId)
      let step = getByID(task.steps, stepId)
      step.progress = (step.progress + 1) % PROGRESS_STEP.length
    }
  },
  actions: {
  },
  modules: [],
  plugins: [ LocalStorage ],
  strict: debug
})
