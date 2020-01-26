import request from 'supertest'
import app from '../src/app'

// How to mock an exported class
// These inner mocks must always start with 'mock'
// or else jest will throw an error
const mockGetProfessor = jest.fn();
const mockaddProfessor = jest.fn();
const mockremoveProfessor = jest.fn();
const mockaddStudent = jest.fn();
const mockremoveStudent = jest.fn();
const mockgetScores = jest.fn();
const mockaddScore = jest.fn();

jest.mock('../src/typeOrmDal', () => {
  return jest.fn().mockImplementation(() => ({
    getProfessor: mockGetProfessor,
    addProfessor: mockaddProfessor,
    removeProfessor: mockremoveProfessor,
    addStudent: mockaddStudent,
    removeStudent: mockremoveStudent,
    getScores: mockgetScores,
    addScore: mockaddScore
  }))
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Async Functions', () => {
  it('GET professors', async () => {
    const fakeResponse = [
      {
        "id": 5,
        "firstname": "Albus",
        "lastname": "Dumbledore",
        "gender": "Trans* Male"
    },
    {
        "id": 6,
        "firstname": "Snapes ",
        "lastname": "Rogue",
        "gender": "Two-Spirit"
    },
    {
        "id": 10,
        "firstname": "test",
        "lastname": "test",
        "gender": "Cis Woman"
    },
    {
        "id": 11,
        "firstname": "test",
        "lastname": "test",
        "gender": "Male"
    }
]
    mockGetProfessor.mockReturnValue(fakeResponse)

    const response = await request(app).get('/professor')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    // expect(mockGetProfessor).toHaveBeenCalledTimes(1)
  })

  it('GET students', async () => {
    const fakeResponse = [
      {
          "id": 1,
          "firstname": "Thibault",
          "lastname": "grouet",
          "gender": "M",
          "house": "Gryffindor"
      },
      {
          "id": 19,
          "firstname": "Guillaume",
          "lastname": "Rouaix",
          "gender": "Cisgender Male",
          "house": "Slytherin"
      },
      {
          "id": 21,
          "firstname": "John",
          "lastname": "Doe",
          "gender": "Cis Male",
          "house": "Hufflepuff"
      },
      {
          "id": 22,
          "firstname": "Guillaume",
          "lastname": "Dupont",
          "gender": "Transsexual Woman",
          "house": "Ravenclaw"
      }
  ]
    mockGetStudent.mockReturnValue(fakeResponse)

    const response = await request(app).get('/student')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    // expect(mockGetProfessor).toHaveBeenCalledTimes(1)
  })

  // it('POST', async () => {
  //   const fakeResponse = [{"id": 1, "firstname": "Albus", "lastname": "Dumbledore", "gender": "Male" }] 
  //   mockaddProfessor.mockReturnValue(fakeResponse)

  //   const response = await request(app).post('professor/test/test/Male')

  //   expect(response.status).toBe(200)
  //   expect(response.body).toEqual(fakeResponse)
  //   // expect(mockaddProfessor).toHaveBeenCalledTimes(1)
  //   // expect(addProfessor).toHaveBeenCalledWith('name', 'F')
  //   // expect(mockGetData).not.toHaveBeenCalled()
  // })
})