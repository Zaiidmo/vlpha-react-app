import { GlassModal } from '../../components/GlassModal'
import LoginForm from '../../components/auth/LoginForm'
import { Button } from "../../components/ui/button"

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <GlassModal
        trigger={
          <Button variant="outline" className="bg-white/20 dark:bg-gray-800/20 backdrop-filter backdrop-blur-sm">
            Open Login
          </Button>
        }
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              start your 14-day free trial
            </a>
          </p>
        </div>
        <LoginForm />
      </GlassModal>
    </div>
  )
}