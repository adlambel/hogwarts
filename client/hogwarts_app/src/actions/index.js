import HttpService from '../service/httpService'

export const init = () => ({
  type: 'INIT',
  payloadScores: HttpService.getScores(),
  payloadProfessors: HttpService.getProfessors(),
  payloadStudents: HttpService.getStudents() // donc payload est une promesse gérée dans points.js
})

export const addStudent = (house, firstname, lastname, gender) => ({
  type: 'ADD_STUDENT',
  payload: HttpService.addStudent(house, firstname, lastname, gender),
  house,
  firstname,
  lastname,
  gender
})

export const removeStudent = id => ({
  type: 'REMOVE_STUDENT',
  payload: HttpService.deleteProfessor(id),
  id
})

export const addProfessor = (firstname, lastname, gender) => ({
  type: 'ADD_PROFESSOR',
  payload: HttpService.addProfessor(firstname, lastname, gender),
  firstname,
  lastname,
  gender
})

export const removeProfessor = id => ({
  type: 'REMOVE_PROFESSOR',
  payload: HttpService.deleteProfessor(id),
  id
})

export const addPoints = (house, professor, points) => ({
  type: 'ADD_POINTS',
  payload: HttpService.addScore(professor, house, points),
  house,
  professor,
  points
})

export const removePoints = id => ({
  type: 'REMOVE_POINTS',
  id
})
