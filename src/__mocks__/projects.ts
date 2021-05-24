import { Project } from '../lib/projects'

const projects: Project[] = [
  {
    title: 'My First Project',
    slug: 'my-first-project',
    statement: 'The *statement* for the _project_',
    photos: [
      {
        key: '01',
        exports: [
          { width: 768, url: `/photos/my-first-project/768w/01.jpg` },
          { width: 1280, url: `/photos/my-first-project/1280w/01.jpg` },
        ],
      },
      {
        key: '02',
        exports: [
          { width: 768, url: `/photos/my-first-project/768w/02.jpg` },
          { width: 1280, url: `/photos/my-first-project/1280w/02.jpg` },
        ],
      },
      {
        key: '03',
        exports: [
          { width: 768, url: `/photos/my-first-project/768w/03.jpg` },
          { width: 1280, url: `/photos/my-first-project/1280w/03.jpg` },
        ],
      },
    ],
  },
  {
    title: 'Project without a statement',
    slug: 'no-statement',
    photos: [
      {
        key: '01',
        caption: 'This is _image 1_',
        exports: [
          { width: 768, url: `/photos/no-statement/768w/01.jpg` },
          { width: 1280, url: `/photos/no-statement/1280w/01.jpg` },
        ],
      },
      {
        key: '02',
        caption: 'This is _image 2_',
        exports: [
          { width: 768, url: `/photos/no-statement/768w/02.jpg` },
          { width: 1280, url: `/photos/no-statement/1280w/02.jpg` },
        ],
      },
      {
        key: '03',
        caption: 'This is _image 3_',
        exports: [
          { width: 768, url: `/photos/no-statement/768w/03.jpg` },
          { width: 1280, url: `/photos/no-statement/1280w/03.jpg` },
        ],
      },
      {
        key: '04',
        caption: 'This is _image 4_',
        exports: [
          { width: 768, url: `/photos/no-statement/768w/04.jpg` },
          { width: 1280, url: `/photos/no-statement/1280w/04.jpg` },
        ],
      },
    ],
  },
  {
    title: 'Archived project',
    slug: 'archived-project',
    isArchived: true,
    photos: [
      {
        key: '01',
        exports: [
          { width: 768, url: `/photos/archived-project/768w/01.jpg` },
          { width: 1280, url: `/photos/archived-project/1280w/01.jpg` },
        ],
      },
      {
        key: '02',
        exports: [
          { width: 768, url: `/photos/archived-project/768w/02.jpg` },
          { width: 1280, url: `/photos/archived-project/1280w/02.jpg` },
        ],
      },
    ],
  },
]

export default projects
