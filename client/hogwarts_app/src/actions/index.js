import HttpService from '../service/httpService'

export const init = () => ({
  type: 'INIT',
  payloadScores: HttpService.getScores(),
  payloadProfessors: HttpService.getProfessors(),
  payloadStudents: HttpService.getStudents() // donc payload est une promesse gérée dans points.js
})

export const addStudent = (house, firstName, lastName, gender) => ({
  type: 'ADD_STUDENT',
  payload: HttpService.addStudent(house, name, gender),
  house,
  firstName,
  lastName,
  gender 
})

export const removeStudent = id => ({
  type: 'REMOVE_STUDENT',
  payload: HttpService.deleteProfessor(id),
  id
})

export const addProfessor = (firstName, lastName, gender) => ({
  type: 'ADD_PROFESSOR',
  payload: HttpService.addProfessor(name, gender),
  firstName,
  lastName,
  gender
})

export const removeProfessor = id => ({
  type: 'REMOVE_PROFESSOR',
  payload: HttpService.deleteProfessor(id),
  id
})

export const addPoints = (house, professor, points) => ({
  type: 'ADD_POINTS',
  payload: HttpService.addScore(professor, house, value),
  house,
  professor,
  points
})

export const removePoints = id => ({
  type: 'REMOVE_POINTS',
  id
})