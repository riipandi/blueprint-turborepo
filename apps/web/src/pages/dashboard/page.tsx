import { Button } from '@repo/ui-react/components'
import * as React from 'react'
import PageShell from '#/layouts/page-shell'

export default function Page() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => setCount((count) => count + 1)

  return (
    <PageShell title="React Application">
      <div className="flex min-h-screen items-center bg-gradient-to-br from-teal-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Logo Section */}
          <div className="mb-12 flex justify-center space-x-8">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img src="/react.svg" className="h-16 w-16" alt="React logo" />
            </a>
          </div>

          {/* Content Section */}
          <div className="text-center">
            <h1 className="mb-8 bg-gradient-to-r from-white to-emerald-300 bg-clip-text font-bold text-4xl text-transparent">
              React Application
            </h1>

            <div className="mx-auto mb-8 max-w-lg rounded-xl bg-slate-800/50 p-8 shadow-lg">
              <Button type="button" variant="primary" onClick={handleClick}>
                Count is {count}
              </Button>

              <p className="mt-4 text-slate-300">
                Edit{' '}
                <code className="rounded bg-slate-700 px-2 py-1 text-sm">apps/web/src/app.tsx</code>{' '}
                and save to test HMR
              </p>
            </div>

            <div className="space-y-2 text-slate-400">
              <p>Click on the Vite and React logos to learn more</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
