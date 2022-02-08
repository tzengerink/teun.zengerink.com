import React from 'react'

interface Props {
  href: string
}

const mockLink = ({ href, children }: React.PropsWithChildren<Props>): React.ReactNode[] => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<React.PropsWithChildren<Props>>, { href })
  })
}

export default mockLink
