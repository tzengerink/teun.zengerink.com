import React from 'react'

interface Props {
  className: string
  href: string
  onClick: () => void
  children: React.ReactElement[]
}

const mockLink: React.FC<Props> = ({ className, href, onClick, children }) => (
  <a className={className} href={href} onClick={onClick}>
    {children}
  </a>
)

export default mockLink
