import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import { ProtectedRoute, PublicRoute } from '@/guards/auth.guard'
import Login from '@/pages/Auth/Login'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  { 
    path: '/forgot-password',
    element: <PublicRoute><ForgotPassword /></PublicRoute>,
  },
  { 
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute>,
  },
]

export default routes