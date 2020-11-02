import { getProjects } from '../../lib/projectService'

describe('getProjects', () => {
  test('it returns the projects asynchronously', async () => {
    expect.assertions(1)
    const projects = await getProjects()
    expect(projects.length).toBeGreaterThan(0)
  })
})
