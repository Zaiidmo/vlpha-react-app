import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
// import Contact from '../pages/Contact'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
//   {
//     path: '/register',
//     element: <Register />,
//   },
]

export default routes