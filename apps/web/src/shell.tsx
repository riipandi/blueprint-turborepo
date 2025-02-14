import * as React from 'react'

interface PageShellProps {
  children: React.ReactNode
  title: string
}

export default function PageShell({ children, title }: PageShellProps) {
  return (
    <>
      <title>{title || 'React Application'}</title>
      {children}
    </>
  )
}
