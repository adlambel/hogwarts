export const initPoints = () => (console.log('testeee'))

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

export const addPoints = (house, professor, points) => ({
  type: 'ADD_POINTS',
  house,
  professor,
  points
})

export const removePoints = id => ({
  type: 'REMOVE_POINTS',
  id
})