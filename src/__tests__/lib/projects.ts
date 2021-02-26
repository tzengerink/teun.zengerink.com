import { getProjects } from '../../lib/projects'

describe('getProjects', () => {
  test('it returns the projects asynchronously', async () => {
    expect.assertions(1)
    const projects = await getProjects()
    expect(projects.length).toBeGreaterThan(0)
  })
})
