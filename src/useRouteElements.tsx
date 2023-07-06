import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import path from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      children: [
        {
          path: path.home,
          element: (
            <MainLayout>
              <Suspense>
                <Home />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: '*',
          element: (
            <Suspense>
              <NotFound />
            </Suspense>
          )
        }
      ]
    }
  ])
  return routeElements
}
