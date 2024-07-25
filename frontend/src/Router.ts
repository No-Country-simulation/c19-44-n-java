import { createBrowserRouter } from 'react-router-dom'
import Landing from './features/landing/pages/Landing'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/auth',
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: '*',
        Component: Login,
      },
    ],
  },
])

export default router
