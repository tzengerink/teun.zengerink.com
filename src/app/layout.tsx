import classNames from 'classnames'
import Navigation from '../components/Navigation/Navigation'
import { TITLE_ROOT } from '../lib/constants'
import '../styles/globals.css'
import { getProjects } from '../lib/projects'

export const generateMetadata = async () => ({
  charset: 'utf-8',
  title: TITLE_ROOT,
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap',
    },
  ],
})

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const projects = await getProjects()

  return (
    <html lang="en" className="font-mono font-light text-grey/90">
      <body className="bg-white m-0">
        <Navigation pageTitle={TITLE_ROOT} projects={projects} />
        <main className={classNames('relative', 'mt-xl', 'mx-md', 'mb-md', 'md:absolute', 'md:m-0', 'md:inset-0')}>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Layout
