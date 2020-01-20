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

export const removeStudent = (house, firstName, lastName, gender) => ({
  type: 'REMOVE_STUDENT',
  house,
  firstName,
  lastName,
  gender
})

export const addProfessor = (firstName, lastName, gender) => ({
  type: 'ADD_PROFESSOR',
  firstName,
  lastName,
  gender
})