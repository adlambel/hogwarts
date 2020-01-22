export const selecteBody = text => ({
  type: 'CHANGE_BODY',
  text
})

export const addStudent = (house, firstName, lastName, gender) => ({
  type: 'ADD_STUDENT',
  house,
  firstName,
  lastName,
  gender
})

export const removeStudent = id => ({
  type: 'REMOVE_STUDENT',
  id
})

export const addProfessor = (firstName, lastName, gender) => ({
  type: 'ADD_PROFESSOR',
  firstName,
  lastName,
  gender
})

export const removeProfessor = id => ({
  type: 'REMOVE_PROFESSOR',
  id
})

export const addPoints = (firstName, lastName, gender) => ({
  type: 'ADD_POINTS',
  firstName,
  lastName,
  gender
})

export const removePoints = id => ({
  type: 'REMOVE_POINTS',
  id
})