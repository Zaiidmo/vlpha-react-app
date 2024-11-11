import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import ForgotPassword from '@/pages/Auth/ForgotPassword'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  { 
    path: '/forgot-password',
    element: <ForgotPassword />,
  }
]

export default routes