import request from 'supertest'
import app from '../app'

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

jest.mock('../typeOrmDal', () => {
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

describe('Professor', () => {
  it('GET', async () => {
    const fakeResponse = [{"id": 1, "firstname": "Albus", "lastname": "Dumbledore", "gender": "Male" },
    mockGetProfessor.mockReturnValue(fakeResponse)

    const response = await request(app).get('/professor')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    expect(mockGetData).toHaveBeenCalledTimes(1)
    expect(mockAdd).not.toHaveBeenCalled()
  })

  it('POST', async () => {
    const fakeResponse = { id: 1, name: 'name', age: 'F' }
    mockAdd.mockReturnValue(fakeResponse)

    const response = await request(app).post('/name/F')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith('name', 'F')
    expect(mockGetData).not.toHaveBeenCalled()
  })
})

}

export default TypeOrmDal
