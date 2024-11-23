import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import { ProtectedRoute } from '@/guards/auth.guard'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  { 
    path: '/forgot-password',
    element: <ForgotPassword />,
  }
]

export default routes