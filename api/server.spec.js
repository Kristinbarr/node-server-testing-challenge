const request = require('supertest')
const server = require('./server')

describe('GET /', () => {

  it('should return status 200', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
  })

  it('should return JSON format', async () => {
    const response = await request(server).get('/')
    expect(response.type).toMatch(/json/i)
  })

  it('should return an object w api property ', async () => {
    const response =  await request(server).get('/')
    expect(response.body.api).toBe('running')
  })
})

// describe('POST /', () => {
//   it('should return status 200', () => {})
//   it('should return JSON format', () => {})
//   it('should return an object w api property ', () => {})
// })
