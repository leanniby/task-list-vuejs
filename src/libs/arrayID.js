// Function for object array with ID

function maxID (arr) {
  return arr.reduce((res, e) => e.id > res ? e.id : res, -1)
}

function getByID (arr, id) {
  return arr.find(e => e.id === id)
}

function deleteByID (arr, id) {
  let index = arr.findIndex(e => e.id === id)
  if (index === -1) {
    return []
  }
  return arr.splice(index, 1)
}

export { maxID, getByID, deleteByID }
