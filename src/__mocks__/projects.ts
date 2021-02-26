import { Project } from '../lib/projects'

const projects: Project[] = [
  {
    title: 'My First Project',
    slug: 'my-first-project',
    statement: 'The statement for the project',
    photos: [
      {
        key: '01',
        url: '/photos/my-first-project/01.jpg',
        size: { width: 800, height: 600 },
      },
      {
        key: '02',
        url: '/photos/my-first-project/02.jpg',
        size: { width: 600, height: 800 },
      },
      {
        key: '03',
        url: '/photos/my-first-project/03.jpg',
        size: { width: 800, height: 600 },
      },
    ],
  },
  {
    title: 'Project without a statement',
    slug: 'no-statement',
    photos: [
      {
        key: '01',
        url: '/photos/no-statement/01.jpg',
        caption: 'This is image 1',
        size: { width: 800, height: 600 },
      },
      {
        key: '02',
        url: '/photos/no-statement/02.jpg',
        caption: 'This is image 2',
        size: { width: 800, height: 600 },
      },
      {
        key: '03',
        url: '/photos/no-statement/03.jpg',
        caption: 'This is image 3',
        size: { width: 600, height: 800 },
      },
      {
        key: '04',
        url: '/photos/no-statement/04.jpg',
        caption: 'This is image 4',
        size: { width: 800, height: 600 },
      },
    ],
  },
]

export default projects
