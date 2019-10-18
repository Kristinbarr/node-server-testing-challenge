const Resources = require('./resource-model')
const db = require('../data/dbConfig')

it('should set the testing environment', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('resources model', () => {
  beforeEach(async () => {
    await db('resources').truncate()
  })

  describe('add()', () => {
    it('should add resource to database', async () => {
      const records = await db('resources')
      expect(records).toHaveLength(0)

      await Resources.add({ name: 'res1' })

      const resources = await db('resources')
      expect(resources).toHaveLength(1)
    })

    it('should add the provided resource to the database', async () => {
      let resource = await Resources.add({ name: 'res2' })
      expect(resource.name).toBe('res2')

      resource = await Resources.add({ name: 'res3' })
      expect(resource.name).toBe('res3')

      const resources = await db('resources')
      expect(resources).toHaveLength(2)
    })
  })

  describe('remove(id)', () => {
    it('should delete a record from the database', async () => {
      await db('resources').insert({ name: 'res1' })
      await db('resources').insert({ name: 'res2' })
      await db('resources').insert({ name: 'res3' })
      const resources = await db('resources')
      expect(resources).toHaveLength(3)

      await Resources.remove(1)
      const records = await db('resources')
      expect(records).toHaveLength(2)
    })

    it('should delete the record associated with provided id', async () => {
      await db('resources').insert({ name: 'res3' })
      await db('resources').insert({ name: 'res4' })
      const id = 1
      await Resources.remove(id)
      const resource = await db('resources').where({id}).first()
      console.log(resource)
      expect(resource[0].id).not.toBe(1)
    })
  })
})
