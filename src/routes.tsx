import { createBrowserRouter } from 'react-router-dom'
import Detail from './pages/Detail/Detail'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Root from './Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'game/:slug/:id',
        element: <Detail />,
      },
    ],
  },
])
