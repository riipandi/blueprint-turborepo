import * as React from 'react'

export default function PageShell(props: React.PropsWithChildren<{ title?: string }>) {
  return (
    <>
      <title>{props.title || 'React Application'}</title>
      {props.children}
    </>
  )
}
