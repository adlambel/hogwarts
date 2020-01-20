import request from 'supertest'
import app from '../app'

// How to mock an exported class
// These inner mocks must always start with 'mock'
// or else jest will throw an error
const mockGetData = jest.fn()
const mockAdd = jest.fn()
jest.mock('../typeOrmDal', () => {
  return jest.fn().mockImplementation(() => ({
    getData: mockGetData,
    add: mockAdd
  }))
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Async action', () => {
  it('GET', async () => {
    const fakeResponse = [{ id: 1, name: 'name', age: 7 }]
    mockGetData.mockReturnValue(fakeResponse)

    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    expect(mockGetData).toHaveBeenCalledTimes(1)
    expect(mockAdd).not.toHaveBeenCalled()
  })

  it('POST', async () => {
    const fakeResponse = { id: 1, name: 'name', age: 7 }
    mockAdd.mockReturnValue(fakeResponse)

    const response = await request(app).post('/name/7')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeResponse)
    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith('name', 7)
    expect(mockGetData).not.toHaveBeenCalled()
  })
})
