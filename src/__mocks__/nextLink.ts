import React from 'react'

const mockLink = ({ href, children }) => React.Children.map(children, (child) => React.cloneElement(child, { href }))

export default mockLink
