export default {
  tasks: loadTasks()
}

function loadTasks () {
  let tasks = []
  let stringData = localStorage.getItem('tasks')
  if (stringData && stringData !== 'undefined') {
    tasks = JSON.parse(stringData) || []
  }
  if (tasks.length === 0 && process.env.NODE_ENV !== 'production') {
    tasks = taskExample
  }
  return tasks
}

let taskExample = [
  {
    id: 0,
    name: 'Task 1',
    steps: [
      {
        id: 0,
        name: 'Step 1',
        progress: 'to-do'
      },
      {
        id: 1,
        name: 'Step 2',
        progress: 'in-progress'
      },
      {
        id: 2,
        name: 'Step 3',
        progress: 'done'
      }
    ]
  },
  {
    id: 1,
    name: 'Task 2',
    steps: [
      {
        id: 0,
        name: 'Step 1',
        progress: 'done'
      },
      {
        id: 1,
        name: 'Step 2',
        progress: 'done'
      }
    ]
  }
]
