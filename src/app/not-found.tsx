import React from 'react'
import PageLayout from '@components/PageLayout/PageLayout'
import { Props } from '@lib/static'
import { getProjects } from '@lib/static'

const ERROR = 'Page Not Found'

const Error: React.FC<Props> = ({ projects }): React.ReactElement => (
  <PageLayout title={ERROR} projects={projects}>
    <h2 className="md:absolute md:inset-20 text-center">{ERROR}</h2>
  </PageLayout>
)

export default async function NotFound() {
  const projects = await getProjects()
  return <Error projects={projects} />
}
