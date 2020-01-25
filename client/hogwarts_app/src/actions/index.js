import HttpService from '../service/httpService'

export const init = () => ({
  type: 'INIT',
  payload: [
    {
      id: 1,
      house: "Gryffondor",
      professor: "prof",
      points: 43,
      active: true
    },
    {
      id: 2,
      house: "Serdaigle",
      professor: "prof",
      points: 3,
      active: true
    }
  ]
  //HttpService.getLogs()
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