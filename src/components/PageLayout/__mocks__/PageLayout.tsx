const PageLayout = ({ children, projects, title }: any) => {
  return (
    <div data-testid="layout" data-projects-count={projects?.length || 0} data-title={title}>
      {children}
    </div>
  )
}

export default PageLayout
