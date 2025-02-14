import * as React from 'react'
import { Navigate, type RouteObject } from 'react-router'
import { InternalError, NotFound } from '#/pages/errors'

// Lazy load the components for better performance
const AppLayout = React.lazy(() => import('#/layouts/app-layout'))
const Dashboard = React.lazy(() => import('#/pages/dashboard/page'))

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to="dashboard" replace /> },
  {
    element: <AppLayout />,
    children: [{ path: 'dashboard', element: <Dashboard /> }],
    errorElement: <InternalError />,
  },
]

export const catchAllRoute: RouteObject = {
  path: '*',
  element: <NotFound />,
  errorElement: <InternalError />,
}
