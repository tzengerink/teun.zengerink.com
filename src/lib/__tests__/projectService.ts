import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getProjects } from '../projectService'

describe('getProjects', () => {
  const ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ENV }
  })

  afterEach(() => {
    process.env = ENV
  })

  test('it returns the projects from response', (done) => {
    const proto = 'http'
    const host = 'my.domain.com'
    const mock = new MockAdapter(axios)
    const projects = [{ title: 'First Project' }, { title: 'Second Project' }]

    process.env.NEXT_PUBLIC_PROTO = proto
    process.env.NEXT_PUBLIC_HOST = host
    mock.onGet(`${proto}://${host}/projects.json`).reply(200, { projects })

    getProjects().then((response) => {
      expect(response).toEqual(projects)
      done()
    })
  })
})
