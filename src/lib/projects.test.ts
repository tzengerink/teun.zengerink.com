import slugify from 'slugify'
import { MAX_WIDTHS, createGetProjects } from './projects'

const mockPhotos = Array.from(Array(5).keys()).map((item) => `${item}.jpg`)

const mockConfig = [
  {
    title: 'The first title',
    captions: mockPhotos.map((_, index) => ({ key: `${index}`, caption: `caption for ${index}` })),
  },
  {
    title: 'The second title',
    statement: 'The statement',
  },
  {
    title: 'The archived title',
    isArchived: true,
  },
]

const mockReaddirSync = jest.fn(() => mockPhotos)
const mockReadFileSync = jest.fn()

jest.mock('js-yaml', () => ({
  load: jest.fn(() => mockConfig),
}))

jest.mock('fs', () => ({
  readdirSync: jest.fn(() => mockReaddirSync()),
  readFileSync: jest.fn(() => mockReadFileSync()),
}))

beforeEach(jest.clearAllMocks)

describe('createGetProjects', () => {
  it('creates a function to get the projects asynchronously', async () => {
    const getProjects = createGetProjects()
    const projects = await getProjects()
    expect(projects).toEqual(
      mockConfig.map((item) => ({
        title: item.title,
        slug: slugify(item.title.toLowerCase()),
        statement: item.statement ?? '',
        isArchived: item.isArchived ?? false,
        photos: mockPhotos.map((photo, index) => ({
          key: `${index}`,
          caption: (item.captions ?? []).find((caption) => caption.key === `${index}`)?.caption ?? '',
          exports: MAX_WIDTHS.map((width) => ({
            width,
            url: `/photos/${slugify(item.title.toLowerCase())}/${width}w/${photo}`,
          })),
        })),
      })),
    )
  })

  it('memoizes the projects for future calls', async () => {
    const getProjects = createGetProjects()
    const firstResult = await getProjects()
    expect(mockReadFileSync).toHaveBeenCalledTimes(1)
    const secondResult = await getProjects()
    expect(secondResult).toBe(firstResult)
    expect(mockReadFileSync).toHaveBeenCalledTimes(1)
  })

  it('logs errors to the console', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation()
    const error = new Error('Not working')
    mockReadFileSync.mockImplementation(() => {
      throw error
    })
    const getProjects = createGetProjects()
    const projects = await getProjects()
    expect(projects).toEqual([])
    expect(spy).toHaveBeenCalledWith(error)
    spy.mockRestore()
  })
})
