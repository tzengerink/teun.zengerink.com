import ProjectSlideshow from '../../ProjectSlideshow'

const projects = [
  {
    title: 'My First Project',
    slug: 'my-first-project',
    photos: [
      {
        key: '01',
        url: '/photos/my-first-project/01.jpg',
      },
      {
        key: '02',
        url: '/photos/my-first-project/02.jpg',
      },
      {
        key: '03',
        url: '/photos/my-first-project/03.jpg',
      },
    ],
    statement: 'The statement for the project',
  },
  {
    title: 'Project without a statement',
    slug: 'no-statement',
    photos: [
      {
        key: '01',
        url: '/photos/no-statement/01.jpg',
        caption: 'This is image 1',
      },
      {
        key: '02',
        url: '/photos/no-statement/02.jpg',
        caption: 'This is image 2',
      },
      {
        key: '03',
        url: '/photos/no-statement/03.jpg',
        caption: 'This is image 3',
      },
      {
        key: '04',
        url: '/photos/no-statement/04.jpg',
        caption: 'This is image 4',
      },
    ],
  },
]
export default projects
